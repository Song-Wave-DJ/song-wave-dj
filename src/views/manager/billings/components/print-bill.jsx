import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Summary } from "../../../menu/components/summary";
import { useState } from "react";
import ModalComp from "../../../../components/modal";
import { Button } from "../../../../components";

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
export const PrintBill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef();

  const onOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <p
        className="text-lg border-b w-full text-center p-2 cursor-pointer"
        onClick={onOpenModal}
      >
        Print Bill
      </p>

      <ModalComp width={1024} open={isOpen} handleCancel={onOpenModal}>
        <>
          <div ref={componentRef} className="px-4">
            <h2 className="text-lg font-semibold my-2">Order Summary</h2>
            <div className="p-2">
              <h2 className="text-lg">Transation Id : 1234567</h2>
              <h2 className="text-lg">GST No. : 1234567</h2>
              <div className="my-4 flex justify-between">
                <span className="text-xs font-semibold w-[33%]">Name</span>
                <span className="text-xs font-semibold w-[33%]">Quantity</span>
                <span className="text-xs font-semibold">Price</span>
              </div>

              <Summary carts={Carts} tax={10} gst={10} offer={10} total={400} />
            </div>
          </div>
          <Button
            isLoading={false}
            label="Print Bill"
            styles="rounded-lg mt-4 w-full"
            onClick={onPrint}
          />
        </>
      </ModalComp>
    </div>
  );
};
