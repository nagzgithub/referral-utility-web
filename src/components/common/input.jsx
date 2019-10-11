import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;