import React, { useState } from "react";
import { DeleteIcon, EditIcon, ViewIcon } from "@/assets";
import {
  IconButton,
  Searching,
  TableComponent,
  Confirmation,
} from "../../components";
import { useNavigate } from "react-router-dom";

const dataSource = [
  {
    id: "12345678",
    name: "New Songs",
    createdAt: "12/12/2023",
    time: "4:22 min",
  },
  {
    id: "1678",
    name: "Comming Songs",
    createdAt: "12/12/2023",
    time: "4:22 min",
  },
  {
    id: "df12378",
    name: "Tum hi ho ",
    createdAt: "12/12/2023",
    time: "4:22 min",
  },
];

const RenderColor = {
  Accept: "#00BC00",
  Pending: "#FFA200",
  Reject: "#840000",
};

export const DJUser = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

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
      title: "Request Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Music Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Request Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, record) => (
        <div className="flex flex-wrap">
          <IconButton color="#EBF7FC" onClick={confirmationOpen}>
            <span className="text-green text-xs">Approved</span>
          </IconButton>
          <IconButton color="#FAE5E5" onClick={confirmationOpen}>
            <span className="text-red text-xs">Decline</span>
          </IconButton>
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
          Total request{"   "} <span className="text-[#3CB5E5]">3</span>
        </p>

        <Searching onChange={onChange} styles="flex-[.2]" />
      </div>
      <TableComponent
        loading={false}
        columns={columns}
        dataSource={dataSource || []}
        total={3}
        pageSize={5}
      />

      <Confirmation
        handleOpen={confirmationOpen}
        open={isConfirmationOpen}
        onConfirm={confirmationOpen}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">
          Are you want you decline music request?
        </p>
      </Confirmation>
    </main>
  );
};
