/* eslint-disable react/prop-types */
import { PrintBill } from "./print-bill";
import { Drawer } from "../../../../components";

export const BilllingAction = ({
  onViewBillings,
  tableNo,
  onCloseDrawer,
  handleShowQR,
  onMoveTable,
}) => {
  return (
    <Drawer
      open={!!tableNo}
      placement="bottom"
      showDrawer={onCloseDrawer}
      title={`Table no. ${tableNo ?? "--"}`}
      height="60%"
      styles={{
        zIndex: 1,
      }}
    >
      <div className="flex flex-col gap-2">
        <p
          className="text-lg border-b w-full text-center p-2 cursor-pointer"
          onClick={onViewBillings}
        >
          View Bill
        </p>
        <PrintBill />
        <p
          className="text-lg border-b w-full text-center p-2 cursor-pointer"
          onClick={onMoveTable}
        >
          Move Table
        </p>

        <p
          className="text-lg border-b w-full text-center p-2 cursor-pointer"
          onClick={handleShowQR}
        >
          Print Bill & Take Payment
        </p>
      </div>
    </Drawer>
  );
};
