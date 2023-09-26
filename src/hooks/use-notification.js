import { notification } from "antd";
import { useEffect } from "react";

export const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = ({
    message,
    description,
    type = "success" | "info" | "warning" | "error",
  }) => {
    api[type]({
      message,
      description,
    });
  };

  return {
    openNotificationWithIcon,
    contextHolder,
  };
};
