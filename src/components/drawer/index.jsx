import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import "./style.css";

const DrawerComp = ({
  open,
  showDrawer,
  closeIcon = <></>,
  width = 500,
  children,
  placement = "right",
  styles,
  extra = true,
  height = "70%",
  title = "",
  isBorderShow = false,
  optionalClassName = "",
}) => {
  return (
    <div className="Drawer--wrapper">
      <Drawer
        width={width}
        onClose={showDrawer}
        height={height}
        open={open}
        title={title}
        placement={placement}
        closeIcon={closeIcon}
        style={{
          ...styles,
        }}
        className={optionalClassName}
        headerStyle={{
          borderBottom: !isBorderShow ? "none" : "1px solid #fff",
        }}
        extra={
          extra && (
            <button onClick={showDrawer}>
              <CloseOutlined />
            </button>
          )
        }
      >
        {children}
      </Drawer>
    </div>
  );
};

export default DrawerComp;
