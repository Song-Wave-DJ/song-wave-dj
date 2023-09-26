import React, { useState } from "react";
import { DeleteIcon, EditIcon, ViewIcon } from "@/assets";
import {
  Button,
  IconButton,
  Searching,
  TableComponent,
  MyImage,
} from "../../components";
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();

  const gotoEdit = (record) => () => {};

  const addMenu = () => {};

  const handleDelete = (value) => () => {};

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
          <IconButton color="#EBF7FC" onClick={gotoView(record)}>
            <span className="text-green text-xs">Received</span>
          </IconButton>

          <IconButton color="#FAE5E5" onClick={handleDelete(record)}>
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
          {record.stauts === "Accept" && (
            <IconButton color="#EBF7FC">
              <span className="text-green cursor-not-allowed text-xs">
                Accept
              </span>
            </IconButton>
          )}

          {record.stauts === "Reject" && (
            <IconButton color="#FAE5E5">
              <span className="text-red cursor-not-allowed text-xs">
                Reject
              </span>
            </IconButton>
          )}
          {record.stauts === "Pending" && (
            <>
              <IconButton color="#EBF7FC" onClick={gotoView(record)}>
                <span className="text-green text-xs">Accept</span>
              </IconButton>
              <IconButton color="#FAE5E5" onClick={handleDelete(record)}>
                <span className="text-red text-xs">Reject</span>
              </IconButton>
            </>
          )}
        </div>
      ),
    },
  ];

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
    </main>
  );
};
