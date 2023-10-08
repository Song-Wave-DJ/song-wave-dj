import { useState } from "react";
import { IconButton, TableComponent } from "@/components";
import ModalComp from "@/components/modal";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { Summary } from "../../../menu/components/summary";
import { RenderColor } from "../../../admin/constanst";

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

export const BillingHistory = ({ isEmployee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <IconButton color="#f8d75dc1">
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
        loading={false}
        columns={columns}
        dataSource={dataSource || []}
        total={10}
        pageSize={10}
      />

      <ModalComp
        open={isModalOpen}
        handleOk={() => null}
        handleCancel={handleCancel}
      >
        <>
          <h2 className="text-s">Order Summary</h2>
          <div className="my-4 flex justify-between">
            <span className=" text-xs font-semibold">Name</span>
            <span className=" text-xs font-semibold">Quantity</span>
            <span className=" text-xs font-semibold">Price</span>
          </div>

          <Summary carts={[]} tax={10} gst={10} offer={300} total={400} />
        </>
      </ModalComp>
    </main>
  );
};
