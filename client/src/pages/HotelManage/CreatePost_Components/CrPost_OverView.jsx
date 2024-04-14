import React from "react";
import "../css/crPost_OverView.css";
import SelectAddress from "./SelectAddress";

const CrPost_OverView = () => {
  return (
    <div>
      <h2 className="Address_title">Thông tin mô tả</h2>
      <SelectAddress label="Loại chuyên mục" />
    </div>
  );
};

export default CrPost_OverView;
