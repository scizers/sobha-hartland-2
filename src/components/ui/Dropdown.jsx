"use client";
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className={`cursor-pointer px-2 py-1 rounded-lg border-b ${
          error ? "border-red-500" : "border-black"
        } bg-transparent`}
      >
        {value || placeholder}
      </div>
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg text-sm">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 text-xs mt-1 px-2">{error}</p>}
    </div>
  );
};

export default Dropdown;
