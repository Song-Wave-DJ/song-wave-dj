const SIZE = {
  sm: 50,
  md: 80,
  lg: 100,
};
const AppLogo = ({ src = "", size = "md" }) => {
  return (
    <>
      <img
        src={src}
        className={`w-20 object-cover`}
        style={{
          width: SIZE[size],
        }}
      />
    </>
  );
};

export default AppLogo;
