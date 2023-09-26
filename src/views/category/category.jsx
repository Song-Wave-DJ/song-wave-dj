import { useEffect, useState } from "react";
import { CategoryCard } from "./components/category-card";
import Searching from "../../components/search-text";
import { RadioButton } from "../../components";

const AllData = [
  {
    id: "5",
    title: "Starter",
  },
  {
    id: "6",
    title: "Main course",
  },
  {
    id: "1",
    title: "Veg",
  },
  {
    id: "2",
    title: "Non-Veg",
  },
  {
    id: "3",
    title: "Cocktail",
  },
];

const VegData = [
  {
    id: "5",
    title: "Starter",
  },
  {
    id: "6",
    title: "Main course",
  },
  {
    id: "1",
    title: "Veg",
  },
  {
    id: "3",
    title: "Cocktail",
  },
];

const NonVegData = [
  {
    id: "5",
    title: "Starter",
  },
  {
    id: "6",
    title: "Main course",
  },

  {
    id: "2",
    title: "Non-Veg",
  },
  {
    id: "3",
    title: "Cocktail",
  },
];

const DrinksData = [
  {
    id: "1",
    title: "Votka",
  },
  {
    id: "2",
    title: "Rum",
  },
  {
    id: "3",
    title: "Beer",
  },
  {
    id: "4",
    title: "Whiskey",
  },
  {
    id: "5",
    title: "Brandy",
  },
  {
    id: "6",
    title: "Cider",
  },
];

export const Categoies = () => {
  const [filterItem, setFilterItem] = useState("All");
  const [isShowBar, setIsShowBar] = useState(false);

  const [categories, setCotegories] = useState(AllData);

  const onChangeSearch = () => {};

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-2 px-4">
      <div className="flex sm:w-[600px] w-full m-auto mt-2 flex-col flex-wrap relative  items-center justify-center md:gap-4">
        <div className="flex my-4 justify-between gap-1 w-full items-center">
          <RadioButton
            OPTIONS={["All", "Veg", "Non-Veg"]}
            onChange={onChangeVegNonVeg}
            value={filterItem}
          />
          <Searching styles="flex-[.9]" onChange={onChangeSearch} />
        </div>
        {categories.map((item) => (
          <CategoryCard {...item} filterItem={filterItem} key={item.id} />
        ))}

        <div className="border-t w-full">
          <button
            onClick={showBar}
            className="text-lg my-4 w-1/2 text-center px-5 py-2 text-purple-100 rounded bg-gradient-to-r from-purple-600 to-purple-400"
          >
            Drinks
          </button>
          {isShowBar &&
            DrinksData.map((item) => (
              <CategoryCard filterItem={filterItem} {...item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
