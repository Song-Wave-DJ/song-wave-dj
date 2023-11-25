import { useCallback, useEffect, useMemo, useState } from "react";
import { AllData, DrinksData, NonVegData, VegData } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import useNotification from "antd/es/notification/useNotification";
import { getMethod, postMethod } from "../../../services";

const user = false;
export const useMenuOrder = () => {
  const [filterItem, setFilterItem] = useState("All");
  const [isLoading, setLoading] = useState(true);

  const cartData = useMemo(
    () =>
      localStorage.getItem("items") &&
      JSON.parse(localStorage.getItem("items") ?? []),
    []
  );

  const [carts, setCarts] = useState(cartData ?? []);
  const [open, setOpen] = useState(false);
  const [categories, setCotegories] = useState([]);
  const [isPaynow, setIsPaynow] = useState(false);
  const [isPlacedOrder, setIsPlacedOrder] = useState(false);
  const [navigate, setNavigate] = useState("PaymentChoose");
  const [selectedMethod, setSelectedMethod] = useState("QR");
  const navigation = useNavigate();

  // Hooks
  const { search = "" } = useLocation();

  const categoryType = useMemo(
    () => search?.split("?")[1]?.split("=")[1],
    [search]
  );

  const restaurntId = useMemo(
    () => search?.split("?")[2]?.split("=")[1],
    [search]
  );

  // Restaunt Id we need to send this id inot menus APIS so that we diff the restaunt. menus accordinly
  console.log(restaurntId);

  const getMenu = async () => {
    const resp = await getMethod(
      "get_menu_user?restaurantId=O9aJGW2gwked&tableId=101"
    );
    if (resp.data) {
      const { menus } = resp.data ?? {};
      function formatData(inputData) {
        const formattedData = Object.keys(inputData ?? {}).map((key, index) => {
          return {
            id: index + 1, // Assuming you want to assign unique IDs
            title: key,
            menus: inputData[key].map((item) => ({
              id: item.id,
              title: item.menu_name,
              price: item.price,
              type: item.type,
              url: item.url,
              description: item.description,
            })),
          };
        });
        return formattedData;
      }
      const outputData = formatData(menus);
      setCotegories(outputData ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMenu();
  }, []);

  const isBar = useMemo(() => categoryType === "bar", [categoryType]);
  const { contextHolder } = useNotification();

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(carts));
  }, [carts]);

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
      setCotegories(categories);
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

    // setCotegories(AllData);

    // if (value?.toLowerCase() === "non-veg") {
    //   setCotegories(NonVegData);
    // } else if (value?.toLowerCase() === "veg") {
    //   setCotegories(VegData);
    // } else {
    //   setCotegories(AllData);
    // }
  };

  const onPlacedOrder = async () => {
    // openNotificationWithIcon({
    //   message: "Order Placed",
    //   description: "Your placed successfully!",
    //   type: "success",
    // });

    const paylaod = carts.map((el) => ({ id: el.id, qty: el.qty }));
    const resp = await postMethod(
      "make_order?restaurantId=O9aJGW2gwked&tableId=101",
      paylaod
    );

    console.log({ resp });

    // check if user exist
    if (user) {
      navigation("/login");
      return;
    }

    onClose();
    setCarts([]);
    localStorage.removeItem("items");
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
  }, []);

  return {
    selectedMethod,
    onChooseMethod,
    onOpenPayment,
    onNextPage,
    setNavigate,
    navigate,
    handlePayNow,
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
    isLoading,
  };
};
