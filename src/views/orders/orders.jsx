import React, { useState } from "react";
import { DeleteIcon, EditIcon, ViewIcon } from "@/assets";
import {
  Button,
  IconButton,
  Searching,
  TableComponent,
  MyImage,
  Confirmation,
} from "../../components";
import { useNavigate } from "react-router-dom";
import ModalComp from "../../components/modal";
import { Summary } from "../category/components/summary";

const dataSource = [
  {
    id: "12345678",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Pending",
  },
  {
    id: "1678",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Pending",
  },
  {
    id: "df12378",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Pending",
  },
  {
    id: "134d2378",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Pending",
  },
  {
    id: "12378",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Pending",
  },
  {
    id: "12345673238",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accept",
  },
  {
    id: "123453673238",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Reject",
  },
];

const RenderColor = {
  Accept: "#00BC00",
  Pending: "#FFA200",
  Reject: "#840000",
};

export const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const navigation = useNavigate();

  const gotoEdit = (record) => () => {};

  const addMenu = () => {};

  const handleDelete = (value) => () => {};

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const gotoView = (record) => () => {};

  const onCancel = () => {
    setDeletedItem(null);
  };

  const onConfirm = () => {};

  const columns = [
    {
      title: "Order Id",
      dataIndex: "id",
      key: "id",
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
      title: "Payment Status",
      dataIndex: "address",
      key: "Action",
      render: (_, record) => (
        <div className="flex flex-wrap">
          <IconButton color="#EBF7FC" onClick={confirmationOpen}>
            <span className="text-green text-xs">Received</span>
          </IconButton>
          <IconButton color="#FAE5E5" onClick={confirmationOpen}>
            <span className="text-red text-xs">Decline</span>
          </IconButton>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, record) => (
        <div className="flex flex-wrap">
          <IconButton color="#f4f1f1" onClick={() => setIsModalOpen(true)}>
            <span className="px-2 text-xs">View</span>
          </IconButton>
          {record.stauts === "Accept" && (
            <IconButton color="#EBF7FC" onClick={confirmationOpen}>
              <span className="text-green cursor-not-allowed text-xs">
                Accept
              </span>
            </IconButton>
          )}

          {record.stauts === "Reject" && (
            <IconButton color="#FAE5E5" onClick={confirmationOpen}>
              <span className="text-red cursor-not-allowed text-xs">
                Reject
              </span>
            </IconButton>
          )}
          {record.stauts === "Pending" && (
            <>
              <IconButton color="#EBF7FC" onClick={confirmationOpen}>
                <span className="text-green text-xs">Accept</span>
              </IconButton>
              <IconButton color="#FAE5E5" onClick={confirmationOpen}>
                <span className="text-red text-xs">Reject</span>
              </IconButton>
            </>
          )}
        </div>
      ),
    },
  ];

  const handleConfirmationOpen = () => {};

  const onChange = () => null;

  return (
    <main className="mx-4 p-4 rounded-md bg-white">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA]  px-4 py-2 rounded-sm text-xs">
          Total orders items{"   "} <span className="text-[#3CB5E5]">0</span>
        </p>

        <Searching onChange={onChange} styles="flex-[.2]" />
      </div>
      <TableComponent
        loading={false}
        columns={columns}
        dataSource={dataSource || []}
        total={10}
        pageSize={5}
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

      <Confirmation
        handleOpen={confirmationOpen}
        open={isConfirmationOpen}
        onConfirm={confirmationOpen}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">Are you sure?</p>
      </Confirmation>
    </main>
  );
};
