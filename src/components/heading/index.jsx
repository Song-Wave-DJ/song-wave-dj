import React from "react";

const Heading = ({ label, children, styles = "" }) => {
  return (
    <div className={`pb-4 ${styles} font-sans`}>
      <h2 className="text-2xl font-semibold font-sans">{label}</h2>
      {children}
    </div>
  );
};

export default Heading;
