import { Title } from "../../components";
import { OrderSummary } from "./history-summary";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
export const OrderHistory = () => {
  return (
    <div className="bg-[#171819] min-h-screen pt-4">
      <div className="sm:w-[600px] w-full m-auto px-4">
        <Tooltip placement="bottom" title="Back">
          <Link to="/menu" className="mb-10 text-l text-white py-2 rounded-md">
            &#x2190;
            <span className="px-2 ">Back</span>
          </Link>
        </Tooltip>
        <h2 className="text-xl text-white font-semibold my-2">
          OrderId: <b>1234567</b>
        </h2>
        <Title label="Order Summary" styles="text-white" />
        <div className="my-4 flex justify-between text-white">
          <span className=" text-lg font-semibold">Name</span>
          <span className=" text-lg font-semibold">Quantity</span>
          <span className=" text-lg font-semibold">Price</span>
        </div>
        <div className="text-white">
          <OrderSummary
            tax={2}
            gst={2}
            carts={[
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
            ]}
            offer={2}
            total={100}
          />
        </div>
      </div>
    </div>
  );
};
