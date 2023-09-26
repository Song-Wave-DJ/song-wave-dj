import React from "react";
import { Modal } from "antd";
import "./style.css";

const ModalComp = ({
  handleOk,
  handleCancel,
  open,
  closable = true,
  children,
  width,
  className,
}) => {
  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={<></>}
      closable={closable}
      children={children}
      width={width}
      className={className}
    >
      {children}
    </Modal>
  );
};

export default ModalComp;
