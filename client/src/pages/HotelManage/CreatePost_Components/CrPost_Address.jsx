import React from "react";
import "../css/crPost_Address.css";
import SelectAddress from "./SelectAddress";
const CrPost_Address = () => {
  return (
    <div>
      <h2 className="Address_title">Địa chỉ cho thuê</h2>
      <div className="Address_Content">
        <div className="Address_sl">
          <SelectAddress label="Thành Phố / Tỉnh" />
          <SelectAddress label="Quận / Huyện" />
          <SelectAddress label="Phường / Xã" />
        </div>

        <input value={123} type="text" readOnly className="input_show" />
      </div>
    </div>
  );
};

export default CrPost_Address;
