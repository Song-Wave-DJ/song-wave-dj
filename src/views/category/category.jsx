import { useEffect, useState } from "react";
import Searching from "../../components/search-text";
import { RadioButton } from "../../components";
import { ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import MenuDrawer from "./components/menu-drawe";
import { useNotification } from "../../hooks";
import { CollapseCard } from "./components/collapse-card";
import { AllData, DrinksData, NonVegData, VegData } from "./constants";
import { EmptyIcon } from "../../assets";
import { FoodLoader } from "../../assets/images";

export const Categoies = () => {
  const [filterItem, setFilterItem] = useState("All");
  const [isShowBar, setIsShowBar] = useState(false);
  const [carts, setCarts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(true);

  const [categories, setCotegories] = useState(AllData);
  const { openNotificationWithIcon, contextHolder } = useNotification();

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
    ({ id, title, url, price, type }) =>
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

  const showBar = () => setIsShowBar((prev) => !prev);

  const onFinish = (paylaod) => {
    openNotificationWithIcon({
      message: "Order Placed",
      description: "Your placed successfully!",
      type: "success",
    });
    onClose();
    setCarts([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }, []);

  if (loaded) {
    return (
      <div className="flex justify-center">
        <img src={FoodLoader} />
      </div>
    );
  }

  return (
    <div className="py-2 px-4">
      {contextHolder}
      <div className="flex sm:w-[600px] w-full m-auto mt-2 flex-col flex-wrap relative  items-center justify-center md:gap-4">
        <div className="flex my-4 justify-between gap-2 w-full items-center">
          <RadioButton
            OPTIONS={["All", "Veg", "Non-Veg"]}
            onChange={onChangeVegNonVeg}
            value={filterItem}
          />
          <Searching styles="flex-1 py-2" onChange={onChangeSearch} />
          <div
            onClick={onClose}
            className="text-2xl cursor-pointer border flex relative justify-center w-10 h-10 p-2 rounded-full"
          >
            <ShoppingCartOutlined />
            {carts?.length > 0 ? (
              <div className="bg-gradient-to-r absolute top-[-6px] right-[-4px] from-purple-600 to-purple-400 flex items-center justify-center rounded-full w-4 h-4">
                <span className="text-x text-white">{carts?.length}</span>
              </div>
            ) : null}
          </div>
        </div>
        {categories?.length > 0 ? (
          categories.map((item, index) => (
            <CollapseCard
              key={item.id}
              {...item}
              index={index}
              menus={item.menus}
              handleAddCart={handleAddCart}
              handleRemoveToCart={handleRemoveToCart}
              carts={carts}
              isFormDrink
            />
          ))
        ) : (
          <div className="flex flex-col items-center">
            <img className="w-40 object-contain" src={EmptyIcon} />
            <p className="text-lg">No data available!</p>
          </div>
        )}
        <div className="w-full">
          <button
            onClick={showBar}
            className="text-lg my-4 w-3/2 text-center px-5 py-2 text-purple-100 rounded bg-gradient-to-r from-purple-600 to-purple-400"
          >
            Drinks
          </button>
          {isShowBar &&
            DrinksData.map((item, idx) => (
              <CollapseCard
                key={idx}
                index={idx}
                {...item}
                dummyData={item.menus}
                handleAddCart={handleAddCart}
                handleRemoveToCart={handleRemoveToCart}
                carts={carts}
              />
              // <CategoryCard filterItem={filterItem} {...item} key={item.id} />
            ))}
        </div>
      </div>

      <MenuDrawer
        onClose={onClose}
        open={open}
        carts={carts}
        setCarts={setCarts}
        onFinish={onFinish}
      />
    </div>
  );
};
