import React from "react";

function InputBox() {
  return (
    <div className="inline-flex">
      <div className="inline-flex flex-col">
        <label className=" mb-2">From</label>
        <input type="text" placeholder="Enter Amount"></input>
      </div>
      <div className="inline-flex flex-col">
        <label className=" mb-2">Currency Type</label>
        <select>
            <option>
                Mahesh
            </option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
