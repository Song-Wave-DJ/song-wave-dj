import ModalComp from "@/components/modal";
import { Summary } from "../../../menu/components/summary";

const Carts = [
  {
    id: "8f6a27c5-d79b-46ad-b339-67859d07a074",
    title: "Parmesan Crusted Potatoes",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
  {
    id: "d2b62d16-b203-4002-af80-24f542119664",
    title: "Samosa Recipe",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
  {
    id: "82fbef80-9870-4277-b514-8874af40adb8",
    title: "Papdi Chaat (Dahi Papri Chaat)",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
  {
    id: "04de4b8d-793c-4b99-95e8-17b69c1d089e",
    title: "Samosa Recipe",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
];

export const ViewBill = ({ orderSummary, onViewCancel }) => {
  return (
    <ModalComp width={1024} open={!!orderSummary} handleCancel={onViewCancel}>
      <>
        <h2 className="text-lg font-semibold my-2">Order Summary</h2>
        <h2 className="text-lg">GST No. : 1234567</h2>
        <div className="my-4 flex justify-between">
          <span className="text-xs font-semibold w-[33%]">Name</span>
          <span className="text-xs font-semibold w-[33%]">Quantity</span>
          <span className="text-xs font-semibold">Price</span>
        </div>

        <Summary carts={Carts} tax={10} gst={10} offer={10} total={400} />
      </>
    </ModalComp>
  );
};
