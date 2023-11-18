/* eslint-disable react/prop-types */
import { Collapse } from "antd";
import { MenuCard } from "./menu-card";

export const CollapseCard = ({
  index,
  menus,
  handleAddCart,
  handleRemoveToCart,
  title,
  carts,
  formDrink = false,
  selectQuantity,
}) => {
  return (
    <Collapse
      size="large"
      className="w-full mb-4"
      expandIconPosition="end"
      items={[
        {
          key: index,
          label: (
            <div className="flex gap-6 items-center">
              <p className="font-sans text-sm text-[#E4C290]">{title}</p>
            </div>
          ),
          children: (
            <div className="flex m-auto flex-col rounded-lg bg-[#171819] flex-wrap gap-4 relative mt-4 items-center justify-center md:gap-4">
              {menus?.map((item) => (
                <MenuCard
                  carts={carts}
                  {...item}
                  key={item.id}
                  handleAddCart={handleAddCart}
                  handleRemoveToCart={handleRemoveToCart}
                  menus={menus}
                  formDrink={formDrink}
                  selectQuantity={selectQuantity}
                />
              ))}
            </div>
          ),
        },
      ]}
    />
  );
};
