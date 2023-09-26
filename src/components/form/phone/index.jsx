import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";

const PhoneInputComponent = PhoneInput.default
  ? PhoneInput.default
  : PhoneInput;

const Contact = ({ onChange, name, ...rest }) => {
  const [isPhoneValid, setPhoneValid] = useState(true);

  const _onChange = (value, country) => {
    let mystring = `+${value}`;
    if (value) return onChange(mystring);
    else return onChange("");
  };

  return (
    <PhoneInputComponent
      name={name}
      disabled={rest?.disabled}
      value={rest?.value}
      enableSearch
      country={"ae"}
      preferredCountries={["ae"]}
      className={`!bg-white border border-grey-90 p-0.5 rounded-md  ${
        rest?.disabled ? "border-grey-light" : ""
      } ${
        isPhoneValid ? "group-focus-within:border-primary-90" : "border-red"
      }`}
      inputClass={`!border-0 !outline-0 left-1 ${
        rest?.disabled ? "!bg-grey-light" : ""
      } ${isPhoneValid ? "" : " !border-0"}`}
      buttonClass={`!border-0 !rounded-lg ${
        rest?.disabled ? "!bg-grey-light" : "!bg-white"
      }`}
      searchClass="w-full m-auto"
      placeholder={rest?.placeholder}
      onChange={_onChange}
    />
  );
};

export default Contact;
