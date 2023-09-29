import { Collapse } from "antd";
import React from "react";
import { MenuCard } from "./menu-card";

export const CollapseCard = ({
  index,
  menus,
  handleAddCart,
  handleRemoveToCart,
  title,
  carts,
  isFormDrink = false,
}) => {
  return (
    <Collapse
      size="large"
      className="w-full mb-4"
      expandIconPosition="end"
      items={[
        {
          key: index,
          label: title,
          children: (
            <div className="flex m-auto flex-col flex-wrap gap-4 relative mt-4 items-center justify-center md:gap-4">
              {menus?.map((item) => (
                <MenuCard
                  isFormDrink={isFormDrink}
                  carts={carts}
                  {...item}
                  key={item.id}
                  handleAddCart={handleAddCart}
                  handleRemoveToCart={handleRemoveToCart}
                  menus={menus}
                />
              ))}
            </div>
          ),
        },
      ]}
    />
  );
};
