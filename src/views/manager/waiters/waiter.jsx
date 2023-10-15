import { useEffect, useState } from "react";
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
import { Form, Tooltip } from "antd";
import { fieldSet } from "./fieldsData";
import { DeleteIcon } from "@/assets";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { getMethod, postMethod } from "../../../services";

export const Waiters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isAttendece, setIsAttendece] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const todatDate = new Date().toLocaleString();

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const fetchWaiter = async () => {
    const resp = await getMethod("get_waiter");
    if (resp.message == "ok") {
      setData(resp.data ?? []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWaiter();
  }, []);

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

  const onChange = ({ target }) => {
    const { value } = target;
    if (value) {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const filterData = prevObj.filter((item) => {
          const queryName = item.name.toString();
          const queryEmail = item.email.toString();
          const queryId = item.id.toString();
          const query = value.toLowerCase();
          return (
            queryName.includes(query) ||
            queryId.includes(query) ||
            queryEmail.includes(query)
          );
        });
        return filterData ?? [];
      });
    }
  };

  const addWaiter = async (data) => {
    const { id, name, phone, password, email } = data;
    const payload = {
      waiter_id: id,
      name,
      email,
      password,
      phone,
    };
    const resp = await postMethod("set_waiter", payload);
    if (resp.message === "ok") {
      fetchWaiter();
    }
    setIsModalOpen(false);
  };

  const onFinish = (payload) => {
    addWaiter(payload);
  };

  const onAddWaiter = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "S.No.",
      dataIndex: "sNo",
      key: "sNO",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "Waiter Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
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
      width: 500,
      key: "Action",
      render: (_, { id, attendece }) => (
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={`/dashboard/waiter/attendance/${id}`}
            className="bg-gray-50 rounded-full px-2 py-1 cursor-pointer"
          >
            <span>Attendence Logs</span>
          </Link>

          {attendece ? (
            <div
              className="bg-gray-50 rounded-full p-2 cursor-pointer"
              onClick={() => setIsAttendece(true)}
            >
              <span>Mark Attendence</span>
            </div>
          ) : (
            <div className="bg-primary text-white rounded-full px-2 py-1">
              <span>Loged In</span>
            </div>
          )}
          <div
            className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-danger"
            onClick={() => onDeleteWaiter(id)}
          >
            <DeleteIcon color="#fff" />
          </div>

          <Tooltip placement="bottom" title="View total order">
            <Link
              to={`/dashboard/waiter/${id}`}
              className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-[#FAFAFA]"
            >
              <RightOutlined />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between flex-wrap gap-4 mb-4 items-center">
        <p className="bg-[#FAFAFA] px-4 py-2 rounded-sm text-xs">
          Total Waiter{" "}
          <span className="text-[#3CB5E5] text-lg">{data?.length}</span>
        </p>
        <div className="flex flex-1 justify-end gap-4">
          <Button label="Add Waiter" styles="rounded-" onClick={onAddWaiter} />
          <Searching onChange={onChange} styles="flex-[.9] md:flex-[.2] py-2" />
        </div>
      </div>
      <TableComponent
        loading={isLoading}
        columns={columns}
        dataSource={data || []}
        total={10}
        pageSize={10}
      />

      <ModalComp open={isModalOpen} handleCancel={handleCancel}>
        <div className="p-4 w-full">
          <Title label="Add New Waiter"></Title>
          <Form
            name="add-waiter"
            requiredMark={false}
            layout="vertical"
            onFinish={onFinish}
            key={Math.random()}
          >
            <TextInput name="id" {...fieldSet.id} />
            <TextInput name="name" {...fieldSet.name} />
            <TextInput name="email" {...fieldSet.email} />
            <TextInput name="phone" {...fieldSet.phone} />

            <TextPassword {...fieldSet.password} />
            <Form.Item>
              <div className="flex justify-between  mt-4 gap-4 w-full">
                <Button
                  htmlType="button"
                  onClick={handleCancel}
                  label="Cancel"
                  styles="!bg-danger flex-[.5]"
                />
                <Button label="Add" isLoading={isLoading} styles="flex-[.5]" />
              </div>
            </Form.Item>
          </Form>
        </div>
      </ModalComp>

      <ModalComp open={isAttendece} handleCancel={() => setIsAttendece(false)}>
        <>
          <Title label="Mark Attendence" />
          <div className="bg-gray-100 my-4 flex items-center justify-center h-12 rounded-lg">
            <div className="text-2xl font-semibold">{todatDate}</div>
          </div>
          <div className="flex justify-between  mt-8 gap-4 w-full">
            <Button
              htmlType="button"
              onClick={() => setIsAttendece(false)}
              label="Cancel"
              styles="!bg-danger flex-[.5]"
            />
            <Button
              label="Confirm"
              styles="flex-[.5]"
              onClick={() => setIsAttendece(false)}
            />
          </div>
        </>
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
