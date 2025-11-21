"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CustomPhoneInput = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  labelStyle = "",
  phoneHeight = 41.6,
  bgColor = "white",
}) => {
  return (
    <div className="w-full bg-transparent">
      <div
        className={`w-full border-b text-black ${
          error ? "border-red-500" : "border-black"
        }`}
      >
        {label && (
          <label className={`font-medium text-black-light-1 p1 ${labelStyle}`}>
            {label}
          </label>
        )}
        <PhoneInput
          country={"ae"}
          value={value}
          onChange={(value, countryData) => onChange(value, countryData)}
          placeholder={placeholder}
          containerStyle={{ width: "100%" }}
          inputProps={{ name: "phone" }}
          inputStyle={{
            width: "100%",
            height: phoneHeight,
            // borderRadius: "10px",
            border: "none",
            color: "black ",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "23px",
            backgroundColor: bgColor,

            fontFamily: "Montserrat, sans-serif",
          }}
          buttonStyle={{
            // borderRadius: "10px 0 0 10px",
            // borderRight: "1px solid #f0eae3",
            border: "none",
            backgroundColor: bgColor,
            // fontFamily: "Montserrat, sans-serif",
          }}
          preferredCountries={["in", "us", "gb", "ae", "au"]}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-2 px-2">{error}</p>}
    </div>
  );
};

export default CustomPhoneInput;
