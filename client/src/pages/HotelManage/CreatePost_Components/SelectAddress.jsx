import React, { memo } from "react";
import "../css/selectAddress.css";
const SelectAddress = ({ label }) => {
  return (
    <div className="Address_Container">
      <label className="address_label" htmlFor="select-address">
        {label}
      </label>
      <select id="select-address" className="Address_sl">
        <option value="">{`--Chọn ${label}--`}</option>
      </select>
    </div>
  );
};

export default memo(SelectAddress);
