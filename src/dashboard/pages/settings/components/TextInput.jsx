// TextInput.js
import React from "react";

const TextInput = ({
  id,
  name,
  type,
  value,
  onChange,
  autoComplete,
  label,
}) => {
  return (
    <div className=" w-full">
      <label className="block text-md font-medium mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
