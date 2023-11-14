/* eslint-disable react/prop-types */
import { Summary } from "./summary";
import { Button } from "../../../components";

export const OrderSummary = ({
  carts = [],
  gst,
  tax,
  offer,
  total,
  onPlacedOrder,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="my-4 flex justify-between">
        <span className=" text-xs font-semibold">Name</span>
        <span className=" text-xs font-semibold">Quantity</span>
        <span className=" text-xs font-semibold">Price</span>
      </div>

      <Summary carts={carts} tax={tax} gst={gst} offer={offer} total={total} />
      <div className="mt-8 w-full">
        <Button label="Place Order" styles="w-full" onClick={onPlacedOrder} />
      </div>
    </>
  );
};
