import React from "react";

function IconButton({ children, color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
      className={`px-2 py-1 bg-[${color}] hover:cursor-pointer m-2 rounded-lg`}
    >
      {children}
    </div>
  );
}

export default IconButton;
