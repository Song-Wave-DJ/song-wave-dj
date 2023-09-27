import React from "react";

const Title = ({ label, styles, children }) => {
  return (
    <>
      <h1 className={`text-2xl font-bold mb-3 ${styles}`}>{label}</h1>
      {children}
    </>
  );
};

export default Title;
