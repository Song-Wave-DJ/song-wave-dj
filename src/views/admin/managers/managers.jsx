import { useState } from "react";
import {
  Searching,
  TableComponent,
  Confirmation,
  Button,
  Title,
  TextInput,
  TextPassword,
} from "@/components";
import ModalComp from "@/components/modal";
import { Form } from "antd";
import { fieldSet } from "./fieldsData";
import { DeleteIcon } from "@/assets";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const dataSource = [
  {
    id: "12345678",
    name: "John Deo",
    email: "john@gmail.com",
    password: "123456788",
    createdAt: "30-09-2023",
  },
];

export const AdminManagers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const onDeleteWaiter = (id) => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const idx = prevObj.findIndex((el) => el.id === id);
      if (idx !== -1) {
        prevObj.shift(idx, 1);
      }
      return prevObj;
    });
  };

  const columns = [
    {
      title: "S.No.",
      dataIndex: "id",
      key: "id",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },

    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, { id }) => (
        <div className="flex flex-wrap gap-3">
          <div
            className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-[#FAFAFA]"
            onClick={() => onDeleteWaiter(id)}
          >
            <DeleteIcon />
          </div>
          <Link
            className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-[#FAFAFA]"
            to="/admin-dashboard/mangers/23"
          >
            <RightOutlined />
          </Link>
        </div>
      ),
    },
  ];

  const onChange = ({ target }) => {
    const { value } = target;
    if (value) {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const filterData = prevObj.filter((item) => {
          const queryTabel = item.name.toString();
          const queryPrice = item.email.toString();
          const query = value.toLowerCase();
          return queryTabel.includes(query) || queryPrice.includes(query);
        });
        return filterData;
      });
    } else {
      setData(dataSource);
    }
  };

  const onFinish = (payload) => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const payData = {
        ...payload,
        id: self.crypto.randomUUID(),
        createdAt: currentDate,
      };
      prevObj.unshift(payData);
      return prevObj;
    });
    setIsModalOpen(false);
  };

  const onAddWaiter = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA] px-4 py-2 rounded-sm text-xs">
          Total Managers{" "}
          <span className="text-[#3CB5E5] text-lg">{data?.length}</span>
        </p>
        <div className="flex flex-1 justify-end gap-4">
          <Button
            isLoading={false}
            label="Add Manager"
            styles="rounded-lg hover:"
            onClick={onAddWaiter}
          />
          <Searching onChange={onChange} styles="flex-[.9] md:flex-[.2] py-2" />
        </div>
      </div>
      <TableComponent
        loading={false}
        columns={columns}
        dataSource={data || []}
        total={10}
        pageSize={10}
      />

      <ModalComp open={isModalOpen} handleCancel={handleCancel}>
        <div className="p-4 w-full">
          <Title label="Add New Manager"></Title>
          <Form
            name="add-manager"
            requiredMark={false}
            layout="vertical"
            onFinish={onFinish}
            key={Math.random()}
          >
            <TextInput name="name" {...fieldSet.name} />
            <TextInput name="email" {...fieldSet.email} />
            <TextPassword {...fieldSet.password} />
            <Form.Item>
              <div className="flex justify-between  mt-4 gap-4 w-full">
                <Button
                  htmlType="button"
                  onClick={handleCancel}
                  label="Cancel"
                  styles="bg-danger flex-[.5]"
                />
                <Button label="Add" styles="flex-[.5]" />
              </div>
            </Form.Item>
          </Form>
        </div>
      </ModalComp>

      <Confirmation
        handleOpen={confirmationOpen}
        open={isConfirmationOpen}
        onConfirm={confirmationOpen}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">
          Are you want to lock this user
        </p>
      </Confirmation>
    </main>
  );
};
