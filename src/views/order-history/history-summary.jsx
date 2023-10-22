export const OrderSummary = ({ carts = [], total }) => {
  return (
    <div className="">
      {carts.map((el) => (
        <div className="my-4 flex justify-between" key={el.id}>
          <span className="text-sm flex-[.5]">
            {el.title}
            {el?.ml && (
              <span className="text-x px-1 font-semibold">({el.ml} ml)</span>
            )}
          </span>
          <span className="text-sm flex-[.2]">{el.qty}</span>
          <span className="text-sm">&#x20B9;{el.price}</span>
        </div>
      ))}

      <div className="border-y py-4 flex justify-between">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-lg font-semibold">&#x20B9;{total}</span>
      </div>
    </div>
  );
};
