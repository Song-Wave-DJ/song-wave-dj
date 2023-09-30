import React from "react";

export const Summary = ({ carts, tax, gst, offer, total }) => {
  return (
    <div className="h-[35vh] overflow-auto">
      {carts.map((el) => (
        <div className="my-4 flex justify-between" key={el.id}>
          <span className="text-xxs">{el.title}</span>
          <span className="text-xxs flex-[.2]">{el.qty}</span>
          <span className="text-xxs">&#x20B9;{el.price}</span>
        </div>
      ))}
      {/* Tax */}
      <div className="my-4 flex justify-between">
        <span className="text-xxs">Tax</span>
        <span className="text-xxs">&#x20B9;{tax}</span>
      </div>
      {/* GST */}
      <div className="my-4 flex justify-between">
        <span className="text-xxs">GST</span>
        <span className="text-xxs">&#x20B9;{gst}</span>
      </div>
      <div className="my-4 flex justify-between">
        <span className="text-xxs">Offer</span>
        <span className="text-xxs">&#x20B9;{offer}</span>
      </div>

      <div className="border-y py-4 flex justify-between">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-lg font-semibold">
          &#x20B9;{total + gst + tax - offer}
        </span>
      </div>
    </div>
  );
};
