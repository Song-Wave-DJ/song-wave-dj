import React from "react";
import { Avatar as Image } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Avatar({ url }) {
  return <Image src={url} icon={<UserOutlined />} size={40} />;
}

export default Avatar;
