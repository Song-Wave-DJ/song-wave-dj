import { useState } from "react";

import {
  Button,
  Confirmation,
  IconButton,
  Searching,
  TableComponent,
} from "../../../components";
import AddCategory from "./add";

export const DashboardCategories = () => {
  const [values, setValues] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // Hooks

  const onCancel = () => {
    setValues(null);
    setDeleteId(null);
  };

  const addCategory = () => setValues(true);

  const handleUpdate = () => () => {};

  const onOk = (payload) => {};

  const onConfirm = () => onDelete();

  const handleDelete = () => () => setDeleteId("");

  const columns = [
    {
      title: "S.No.",
      dataIndex: "id",
      key: "id",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, record) => (
        <div className="flex">
          <IconButton color="#EBF7FC" onClick={handleUpdate()}>
            <p className="px-2">Edit</p>
          </IconButton>
          <IconButton color="#FAE5E5" onClick={handleDelete()}>
            <p className="px-2">Delete</p>
          </IconButton>
        </div>
      ),
    },
  ];

  const onChange = () => {};

  const dataSource = [
    {
      id: 123,
      name: "Cocktail",
    },
  ];
  return (
    <main className="mx-4 p-4 rounded-md bg-white">
      <div className="flex flex-wrap   justify-between items-center mb-4">
        <div className="flex w-full justify-between items-center gap-2">
          <Searching onChange={onChange} styles="flex-1 md:flex-[.2]" />
          <Button
            onClick={addCategory}
            label="Add Category"
            styles="w-40 text-purple-100 text-x rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
            isLoading={false}
          />
        </div>
      </div>
      <TableComponent
        loading={false}
        columns={columns}
        dataSource={dataSource}
        total={10}
      />
      <AddCategory
        isVisible={!!values}
        handleModal={onCancel}
        onFinish={onOk}
        isMutating={false}
        name={""}
      />
      <Confirmation
        handleOpen={onCancel}
        open={deleteId ? true : false}
        onConfirm={onConfirm}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">
          Do you really want to remove {deleteId?.name} from the employee list?
        </p>
      </Confirmation>
    </main>
  );
};
