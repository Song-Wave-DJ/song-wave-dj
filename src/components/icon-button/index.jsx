function IconButton({ children, color, onClick, optionalStyles = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
        ...optionalStyles,
      }}
      className={`px-2 bg-[${color}] hover:cursor-pointer m-2 rounded-lg`}
    >
      {children}
    </div>
  );
}

export default IconButton;
