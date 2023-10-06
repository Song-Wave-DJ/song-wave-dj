import { useCallback, useEffect, useMemo, useState } from "react";
import { AllData, DrinksData, NonVegData, VegData } from "../constants";
import { useLocation } from "react-router-dom";
import useNotification from "antd/es/notification/useNotification";

export const useMenuOrder = () => {
  const [filterItem, setFilterItem] = useState("All");
  const [carts, setCarts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [categories, setCotegories] = useState(AllData);
  const [isPaynow, setIsPaynow] = useState(false);
  const [isPlacedOrder, setIsPlacedOrder] = useState(false);

  const [navigate, setNavigate] = useState("PaymentChoose");
  const [selectedMethod, setSelectedMethod] = useState("QR");

  // Hooks
  const { search = "" } = useLocation();
  const categoryType = useMemo(
    () => search?.split("?")[1]?.split("=")[1],
    [search]
  );
  const isBar = useMemo(() => categoryType === "bar", [categoryType]);
  const { contextHolder } = useNotification();

  useEffect(() => {
    if (isBar) {
      setCotegories(DrinksData);
    }
  }, [isBar]);

  // Method
  const onChangeSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (categories && query) {
      setCotegories((prev) => {
        const prevObj = structuredClone(prev);
        const serachData = prevObj?.filter((data) => {
          const name = data?.title?.toLowerCase();
          return name.includes(query);
        });
        return serachData;
      });
    } else {
      setCotegories(AllData);
    }
  };

  const onClose = () => {
    setOpen((prev) => !prev);
  };

  const handleAddCart =
    ({ id, title, url, price, type, ml }) =>
    () => {
      setCarts((prev) => [
        ...prev,
        {
          id,
          title,
          price,
          url,
          qty: 1,
          type,
          ml,
        },
      ]);
    };

  const handleRemoveToCart =
    ({ id }) =>
    () => {
      setCarts((prev) => {
        const prvObj = structuredClone(prev);
        const filterData = prvObj.filter((item) => item.id !== id);
        return filterData;
      });
    };

  const onChangeVegNonVeg = (event) => {
    const { value } = event.target;
    setFilterItem(value);
    if (value?.toLowerCase() === "non-veg") {
      setCotegories(NonVegData);
    } else if (value?.toLowerCase() === "veg") {
      setCotegories(VegData);
    } else {
      setCotegories(AllData);
    }
  };

  const onPlacedOrder = async () => {
    // openNotificationWithIcon({
    //   message: "Order Placed",
    //   description: "Your placed successfully!",
    //   type: "success",
    // });
    onClose();
    setCarts([]);
    setIsPlacedOrder(true);
  };

  const selectQuantity = useCallback((item, id) => {
    setCarts((prev) => {
      const prevObj = structuredClone(prev);
      const data = prevObj?.find((el) => el.id == id);
      const idx = prevObj?.findIndex((el) => el.id == id);
      if (idx !== -1) {
        const payload = {
          ...data,
          id,
          ...item,
        };
        prevObj.splice(idx, 1, payload);
      }
      return prevObj;
    });
  }, []);

  const onOpenPayment = () => setIsPaynow((prev) => !prev);

  const handlePayNow = useCallback(() => {
    onOpenPayment();
    // openNotificationWithIcon({
    //   message: "Payment",
    //   description: "Your payment is done successfully!",
    //   type: "success",
    // });
    setIsPlacedOrder(false);
  }, []);

  const onChooseMethod = (id) => {
    setSelectedMethod(id);
  };

  const onNextPage = () => {
    switch (selectedMethod) {
      case "CARD":
        return setNavigate("Card");
      case "QR":
        return setNavigate("QR");
      default:
        return null;
    }
  };

  // Effect
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }, []);

  return {
    selectedMethod,
    onChooseMethod,
    onOpenPayment,
    onNextPage,
    setNavigate,
    navigate,
    handlePayNow,
    loaded,
    contextHolder,
    categories,
    isBar,
    onChangeVegNonVeg,
    filterItem,
    onChangeSearch,
    onClose,
    carts,
    isPlacedOrder,
    onPlacedOrder,
    isPaynow,
    setCarts,
    handleRemoveToCart,
    handleAddCart,
    selectQuantity,
    open,
  };
};