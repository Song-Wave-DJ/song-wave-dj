import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Summary } from "../../../menu/components/summary";
import { useState } from "react";
import ModalComp from "@/components/modal";
import { Button } from "@/components";

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

      <ModalComp open={isOpen} handleCancel={onOpenModal}>
        <>
          <h2 className="text-lg font-semibold my-2">Order Summary</h2>
          <div ref={componentRef} className="p-2">
            <h2 className="text-lg">Transation Id : 1234567</h2>
            <h2 className="text-lg">GST No. : 1234567</h2>
            <div className="my-4 flex justify-between">
              <span className="text-xs font-semibold">Name</span>
              <span className="text-xs font-semibold">Quantity</span>
              <span className="text-xs font-semibold">Price</span>
            </div>

            <Summary carts={[]} tax={10} gst={10} offer={300} total={400} />
          </div>
          <Button
            isLoading={false}
            label="Print Bill"
            styles="rounded-lg w-full"
            onClick={onPrint}
          />
        </>
      </ModalComp>
    </div>
  );
};
