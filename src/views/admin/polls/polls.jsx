import { useState } from "react";
import { Searching, TableComponent, Confirmation } from "@/components";
import ModalComp from "@/components/modal";
import { Button } from "../../../components";
import { Link } from "react-router-dom";

import { DeleteIcon, EditIcon, ViewIcon } from "../../../assets";
const datawer = {
  id: 1,
  questionTitle:
    " Share your most interesting business idea you've ever thought of! 😊",
  question: "DM me if you wanna know about  that idea ",
  data: [
    {
      id: 1,
      title: "I'm telling 😊😊",
      progressValue: "20%",
    },
    {
      id: 2,
      title: "No, It's a secret 😊😊",
      progressValue: "30%",
    },
    {
      id: 3,
      title: "I'm doing it 👍",
      progressValue: "60%",
    },
    {
      id: 4,
      title: "Never given a thought",
      progressValue: "50%",
    },
  ],
};
const dataSource = [
  {
    id: 12345,
    pollTitle:
      "Share your most interesting business idea you've ever thought of!",
    questionTitle:
      "Share your most interesting business idea you've ever thought of!",
    votes: "20k",
  },
];

export const AdminPolls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const onDelete = (id) => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const index = prevObj.findIndex((el) => el.id === id);
      if (index !== -1) {
        prevObj.splice(index, 1);
      }
      return prevObj;
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Poll Title",
      dataIndex: "pollTitle",
      key: "pollTitle",
    },
    {
      title: "Question Title",
      dataIndex: "questionTitle",
      key: "questionTitle",
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
    },

    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, { id }) => (
        <div className="flex flex-wrap gap-2">
          <div
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 cursor-pointer rounded-full flex justify-center items-center bg-gray-200 "
          >
            <ViewIcon />
          </div>

          <div
            onClick={() => onDelete(id)}
            className="w-12 h-12 cursor-pointer rounded-full flex justify-center items-center bg-gray-200 "
          >
            <DeleteIcon />
          </div>
        </div>
      ),
    },
  ];

  const onChange = ({ target }) => {
    const { value } = target;
  };

  return (
    <main className="mx-4 p-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA]  px-4 py-2 rounded-sm text-xs">
          Total orders items{"   "}{" "}
          <span className="text-[#3CB5E5]">{data.length ?? 0}</span>
        </p>
        <div className="flex flex-1 md:flex-[.25] gap-2">
          <Searching onChange={onChange} styles="py-2" />
        </div>
      </div>
      <TableComponent
        loading={false}
        columns={columns}
        dataSource={data || []}
        total={10}
        pageSize={10}
      />

      <ModalComp
        open={isModalOpen}
        handleOk={() => null}
        handleCancel={handleCancel}
      >
        <>
          <div className="flex justify-center mb-2 rounded-md bg-white p-2  flex-wrap flex-col">
            <h1 className="text-lg font-semibold">{datawer.questionTitle}</h1>
            <p className="text-lg">{datawer.question}</p>
            <div className="flex justify-center flex-col p-2 rounded-lg w-full bg-white">
              {datawer.data.map((item) => (
                <div className="border mb-2 rounded-lg p-2" key={item.id}>
                  <span className="text-lg">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
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
