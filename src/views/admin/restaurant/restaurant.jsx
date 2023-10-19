import { useState } from "react";
import {
  Searching,
  TableComponent,
  Button,
  Title,
  TextInput,
  TextPassword,
} from "@/components";
import ModalComp from "@/components/modal";
import { Form } from "antd";
import { fieldSet } from "./fieldsData";
import { DeleteIcon, EditIcon } from "@/assets";

const dataSource = [
  {
    id: "12345678",
    name: "John Deo",
    email: "john@gmail.com",
    address: "New Jersey",
    zipCode: "1234567",
    city: "US",
    state: "US",
    phone: "+91234567890",
    password: "123456788",
    gstNo: "1234567890",
    createdAt: "30-09-2023",
  },
];

export const Restaurant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(dataSource);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
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
      title: "Restaurant Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "GST No",
      dataIndex: "gstNo",
      key: "gstNo",
    },
    {
      title: "Owner Name",
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
      title: "Phone No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (_, { address, zipCode, city, state }) => (
        <p>
          {address},{zipCode},{city},{state}
        </p>
      ),
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
          <div
            className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-[#FAFAFA]"
            onClick={handleCancel}
          >
            <EditIcon />
          </div>
        </div>
      ),
    },
  ];

  const onChangeSearch = ({ target }) => {
    const { value } = target;
    if (value) {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const filterData = prevObj.filter((item) => {
          const queryName = item.name.toLowerCase();
          const queryEmail = item.email.toLowerCase();
          const gstNo = item.gstNo.toLowerCase();
          const address = item.address.toLowerCase();
          const phone = item.phone.toLowerCase();
          const query = value.toLowerCase();
          return (
            queryName.includes(query) ||
            queryEmail.includes(query) ||
            gstNo.includes(query) ||
            address.includes(query) ||
            phone.includes(query)
          );
        });
        return filterData ?? [];
      });
    }
  };

  const onFinish = (payload) => {
    console.log({ payload });
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

  const onAddUsers = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA] px-4 py-2 rounded-sm text-xs">
          Total Users{" "}
          <span className="text-[#3CB5E5] text-lg">{data?.length}</span>
        </p>
        <div className="flex flex-1 justify-end gap-4">
          <Button
            isLoading={false}
            label="Add Restaurant"
            styles="rounded-lg hover:"
            onClick={onAddUsers}
          />
          <Searching
            onChange={onChangeSearch}
            styles="flex-[.9] md:flex-[.2] py-2"
          />
        </div>
      </div>
      <TableComponent
        loading={false}
        columns={columns}
        dataSource={data || []}
        total={10}
        pageSize={10}
      />

      <ModalComp width={1024} open={isModalOpen} handleCancel={handleCancel}>
        <div className="p-4 w-full">
          <Title label="Add Restaurant"></Title>
          <Form
            name="add-users"
            requiredMark={false}
            layout="vertical"
            onFinish={onFinish}
            key={Math.random()}
            className="grid grid-cols-2 gap-4"
          >
            <TextInput name="name" {...fieldSet.name} />
            <TextInput name="email" {...fieldSet.email} />
            <TextPassword {...fieldSet.password} />
            <TextInput name="gstNo" {...fieldSet.gstNo} />
            <TextInput name="phone" {...fieldSet.phone} />
            <TextInput name="address" {...fieldSet.address} />
            <TextInput name="address2" {...fieldSet.address2} />
            <TextInput name="zipCode" {...fieldSet.pin} />
            <TextInput name="city" {...fieldSet.city} />
            <TextInput name="state" {...fieldSet.state} />

            <div className="w-full col-span-2">
              <div className="flex justify-end  mt-8 gap-4 w-full">
                <Button
                  htmlType="button"
                  onClick={handleCancel}
                  label="Cancel"
                  styles="!bg-danger"
                />
                <Button label="Add" styles="flex-[.1]" />
              </div>
            </div>
          </Form>
        </div>
      </ModalComp>
    </main>
  );
};
