import { useNavigate } from "react-router";
import { CategoryCard } from "./component/category-card";
import { useLayoutEffect } from "react";

const JSONData = [
  {
    id: 23456712,
    name: "Brewery Bites",
    imageUrl:
      "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    type: "salad",
    resturantd: "salad",
  },
  {
    id: 12,
    name: "Food Menu",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    type: "food",
  },
  {
    id: 15672,
    name: "Bar Menu",
    imageUrl:
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    type: "bar",
  },
  {
    id: 1232,
    name: "Offer",
    imageUrl:
      "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
    type: "offer",
  },
];

export const Category = () => {
  const navigation = useNavigate();

  const restaurantId = localStorage.getItem("restaurantId");
  const tableId = localStorage.getItem("tableId");

  useLayoutEffect(() => {
    if (!restaurantId || !tableId) return navigation("/");
    navigation(`?resturantId=${restaurantId}&tableId=${tableId}`);
  }, [navigation, restaurantId, tableId]);

  return (
    <div className="bg-[#000]">
      <div className="sm:w-[600px]  w-full m-auto  p-4">
        <div className="flex flex-col items-center gap-6">
          {JSONData.map((el) => (
            <CategoryCard
              {...el}
              key={el.id}
              tableId={tableId}
              resturantId={restaurantId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
