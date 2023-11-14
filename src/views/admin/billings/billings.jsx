import { useRef, useState } from "react";
import { IconButton, TableComponent } from "../../../components";
import ModalComp from "../../../components/modal";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useReactToPrint } from "react-to-print";
import { Button } from "../../../components";
import { Summary } from "../../menu/components/summary";
import { RenderColor } from "../../../constants";
import { DateRange, Searching } from "../../../components";
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

const dataSource = [
  {
    id: "12378",
    table: 212,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accepted",
    transactionId: "123456734",
  },
  {
    id: "12345673238",
    table: 13452,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accepted",
    transactionId: "123456734",
  },
  {
    id: "123453673238",
    table: 134562,
    price: 1230,
    transactionId: "123456734",
    createdAt: "12/12/2023",
    stauts: "Rejected",
  },
];

export const AdminBillingHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState(null);
  const componentRef = useRef();

  const onPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onChangeDateRange = (val) => {
    setDateRange(val);
  };

  const onChange = (e) => {
    console.log(e);
  };

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
              to={`/admin-dashboard/billings/${table}`}
            >
              <RightOutlined />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <main className="w-full p-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 items-center gap-4">
        <p className="bg-[#FAFAFA] w-full md:w-auto px-4 py-2 rounded-sm text-lg">
          Total Post Billings: {"   "}
          <span className="text-primary text-lg">{dataSource?.length}</span>
        </p>

        <div className="flex   items-center gap-4">
          <Searching onChange={onChange} styles="py-2" />
          <DateRange
            onChangeDateRange={onChangeDateRange}
            dateRange={dateRange}
          />
        </div>
      </div>

      <TableComponent
        loading={false}
        columns={columns}
        dataSource={dataSource || []}
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
