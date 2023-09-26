import { Drawer } from "antd";

export const Drawers = ({
  width = 300,
  onClose,
  title = "",
  open,
  children,
}) => {
  return (
    <>
      <Drawer
        title={title}
        className="bg-black"
        width={width}
        closable
        onClose={onClose}
        open={open}
        background="#000"
      >
        {children}
      </Drawer>
    </>
  );
};
