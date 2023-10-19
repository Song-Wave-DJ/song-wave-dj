import { useEffect, useRef, useState } from "react";
import { IconButton, TableComponent } from "@/components";
import ModalComp from "@/components/modal";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Summary } from "../../../menu/components/summary";
import { RenderColor } from "../../../admin/constanst";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components";
import { getMethod } from "../../../../services";

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

export const BillingHistory = ({ isEmployee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const componentRef = useRef();

  const initBillingHistory = async () => {
    const resp = await getMethod("billing-history");
    console.log(resp);

    if (resp.message === "ok") {
      const { data } = resp;
      setData(data?.billing_history);
    }
    setLoading(false);
  };

  useEffect(() => {
    initBillingHistory();
  }, []);

  const onPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const columns = [
    {
      title: "Order Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Table No.",
      dataIndex: "table",
      key: "table",
    },

    {
      title: "Total",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "stauts",
      key: "stauts",
      render: (_, { stauts }) => (
        <p
          className="text-lg"
          style={{
            color: RenderColor[stauts],
          }}
        >
          {stauts}
        </p>
      ),
    },

    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, { stauts, table }) => (
        <div className="flex flex-wrap">
          <IconButton color="#876CFE" onClick={() => setIsModalOpen(true)}>
            <span className="text-x px-2 text-white">Bill</span>
          </IconButton>
          {stauts === "Accepted" && (
            <IconButton color="#f8d75dc1" onClick={() => setIsOpen(true)}>
              <span className="text-x text-white">Print</span>
            </IconButton>
          )}
          <Tooltip placement="bottom" title="Show Table Billings">
            <Link
              className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-[#FAFAFA]"
              to={
                !isEmployee
                  ? `/dashboard/billings/${table}`
                  : `/employee/billings/${table}`
              }
            >
              <RightOutlined />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <main className="w-full">
      <TableComponent
        loading={loading}
        columns={columns}
        dataSource={data || []}
        total={10}
        pageSize={10}
      />

      <ModalComp open={isModalOpen} width={1024} handleCancel={handleCancel}>
        <>
          <h2 className="text-xl">Order Summary</h2>
          <div className="my-4 flex justify-between">
            <span className="text-xs font-semibold w-[33%]">Name</span>
            <span className="text-xs font-semibold w-[33%]">Quantity</span>
            <span className=" text-xs font-semibold">Price</span>
          </div>

          <Summary carts={Carts} tax={10} gst={10} offer={10} total={400} />
        </>
      </ModalComp>

      <ModalComp
        width={1024}
        open={isOpen}
        handleCancel={() => setIsOpen(false)}
      >
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
    </main>
  );
};
