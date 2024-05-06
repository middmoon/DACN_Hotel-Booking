import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState([]);
  const [search2, setSearch2] = useState([]);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };

  useEffect(() => {
    const fetchSearch = async (query) => {
      try {
        const response = await axios.get(
          `http://localhost:3030/v2/api/search/place?query=${query}`
        );

        setSearch([
          ...response.data.metadata.provinces,
          ...response.data.metadata.districts,
        ]);
        setSearch2(response.data.metadata.districts);
        console.log(response.data.metadata);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phòng:", error);
      }
    };

    fetchSearch(value);
  }, [value]);

  return (
    <div>
      <div>
        <h1>search</h1>
        <input type="text" value={value} onChange={onChange} />
      </div>

      <div style={{ backgroundColor: "black" }}>
        {Array.isArray(search) &&
          search
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.name_en.toLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .map((item) => (
              <div
                onClick={() => onSearch(item.name_en)}
                className="dropdown-row"
                key={item.id}
              >
                {item.name_en}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Test;
