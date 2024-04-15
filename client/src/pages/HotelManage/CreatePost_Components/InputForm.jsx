import React from "react";

const InputForm = ({ label, value }) => {
  return (
    <div className="ovv_content">
      <label htmlFor="title" style={{ fontWeight: "500" }}>
        {label}
      </label>
      <input type="text" id="title" className="ovv_input" />
    </div>
  );
};

export default InputForm;
