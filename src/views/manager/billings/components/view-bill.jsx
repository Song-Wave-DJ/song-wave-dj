import ModalComp from "@/components/modal";
import { Summary } from "../../../menu/components/summary";

export const ViewBill = ({ orderSummary, onViewCancel }) => {
  return (
    <ModalComp open={!!orderSummary} handleCancel={onViewCancel}>
      <>
        <h2 className="text-lg font-semibold my-2">Order Summary</h2>
        <h2 className="text-lg">GST No. : 1234567</h2>
        <div className="my-4 flex justify-between">
          <span className="text-xs font-semibold">Name</span>
          <span className="text-xs font-semibold">Quantity</span>
          <span className="text-xs font-semibold">Price</span>
        </div>

        <Summary carts={[]} tax={10} gst={10} offer={300} total={400} />
      </>
    </ModalComp>
  );
};
