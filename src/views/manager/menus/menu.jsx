/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

import {
  Button,
  Confirmation,
  Modal,
  Searching,
  TextInput,
  Title,
} from "../../../components";
import ViewMenu from "./view-menu";
import { MenuCard } from "./menu-card";
import { AddDashbardMenu } from "./add-menu";
import { EmptyIcon } from "../../../assets";
import { Link } from "react-router-dom";
import { Form, Spin } from "antd";
import { TaxfieldSet } from "./tax-fieldsData";
import { getMethod, postMethod } from "../../../services";

export const Menus = () => {
  const [values, setValues] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const [taxes, setTaxes] = useState({
    tax: 12,
    gst: 123,
    offer: 13,
  });
  const [isTaxOpen, setIsTaxOpen] = useState(false);

  const [editData, setEditData] = useState({
    name: "",
    type: true,
    discount: "",
    description: "",
    price: "",
    available: true,
  });
  const [datas, setData] = useState([]);
  // Hooks

  const fetchMenu = async () => {
    const resp = await getMethod("get_menu");
    if (resp.message === "ok") {
      const { data } = resp;
      setData(data?.menu);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const onCancel = () => {
    setValues(null);
  };

  const onConfirm = () => null;

  const onChange = (e) => {
    const query = e.target.value?.toLowerCase(); // Convert query to lowercase
    if (datas && query) {
      const searchData = datas.filter((data) => {
        const name = data.name ? data.name.toLowerCase() : "";
        const type = data.type ? data.type.toLowerCase() : "";
        const category = data.category ? data.category.toLowerCase() : "";
        return (
          name.includes(query) ||
          type.includes(query) ||
          category.includes(query)
        );
      });
      setData(searchData ?? []);
    }
  };

  const handleDelete = async (id, name) => {
    const resp = await postMethod("delete_menu", { name });
    if (resp?.message === "ok") {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const idx = prevObj.findIndex((el) => el.id === id);
        if (idx !== -1) {
          prevObj.splice(idx, 1);
        }
        return prevObj;
      });
    }
  };

  const handleView = (id) => {
    const idData = datas?.find((el) => el.id === id);
    setValues(idData ?? {});
  };

  const handleEdit = (id) => {
    setModalOpen(true);
    const editData = datas?.find((el) => el.id === id);
    setEditData(editData);
  };

  const handleDulicate = (id) => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const data = prevObj.find((el) => el.id === id);
      const newData = {
        ...data,
        id: self.crypto.randomUUID(),
      };
      prevObj.push(newData);
      return prevObj;
    });
  };

  const handleCancelModal = () => {
    setValues(null);
  };
  const addMenu = async (data) => {
    setLoaded(true);
    const { category, name, price, discount, description, type, available } =
      data ?? {};
    const payload = {
      category: category,
      name,
      discount,
      description,
      type: type ? "veg" : "nonveg",
      available,
      price,
    };
    const resp = await postMethod("set_menu", payload);
    if (resp.message === "ok") {
      fetchMenu();
    }
    setLoaded(false);

    setModalOpen((prev) => !prev);
  };
  const onSaveMenu = (payload, id) => {
    addMenu(payload);

    // if (id) {
    //   setData((prev) => {
    //     const prevObj = structuredClone(prev);
    //     const data = prevObj.find((el) => el.id === id);
    //     const idx = prevObj.findIndex((el) => el.id === id);
    //     if (idx !== -1) {
    //       const newData = {
    //         ...data,
    //         ...payload,
    //         type: payload?.type ? "Veg" : "Non-Veg",
    //         id,
    //       };
    //       prevObj.splice(idx, 1, newData);
    //     }

    //     return prevObj;
    //   });
    // } else {
    //   setData((prev) => {
    //     const prevObj = structuredClone(prev);
    //     const newData = {
    //       ...payload,
    //       type: payload?.type ? "Veg" : "Non-Veg",
    //       id: self.crypto.randomUUID(),
    //       imageUrl:
    //         "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
    //     };
    //     prevObj.unshift(newData);
    //     return prevObj;
    //   });
    // }
    setEditData({
      name: "",
      type: true,
      discount: "",
      description: "",
      price: "",
    });
  };

  const onAddMenu = () => {
    setModalOpen((prev) => !prev);
    setEditData({
      name: "",
      type: true,
      discount: "",
      description: "",
      price: "",
      available: true,
    });
  };

  const onSaveTax = (payload) => {
    setTaxes(payload);
    setIsTaxOpen(false);
  };

  if (isLoading)
    return (
      <div className="h-screen grid content-center">
        {" "}
        <Spin />
      </div>
    );

  return (
    <main className="mx-4 p-4">
      <div className="flex flex-wrap justify-end items-center mb-4">
        <div className="flex justify-end items-center gap-2">
          <Button
            label="Taxes"
            onClick={() => setIsTaxOpen(true)}
            styles="rounded-lg"
          />
          <Link to="/dashboard/table">
            <Button label="Table" styles="rounded-lg" />
          </Link>
          <Button
            isLoading={false}
            label="Add Menu"
            styles="rounded-lg w-full "
            onClick={onAddMenu}
          />
          <Searching onChange={onChange} styles="py-2" />
        </div>
      </div>
      <AddDashbardMenu
        onFinish={onSaveMenu}
        editData={editData}
        onAddMenu={onAddMenu}
        modalOpen={modalOpen}
        isLoading={loaded}
      />
      <div className="flex  flex-wrap justify-center gap-6 my-6">
        {datas.length > 0 ? (
          datas?.map((item) => (
            <MenuCard
              key={item.id}
              handleView={handleView}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleDulicate={handleDulicate}
              {...item}
            />
          ))
        ) : (
          <div
            className=" grid content-center"
            style={{
              height: "calc(100vh - 30vh)",
            }}
          >
            <div className="flex flex-col items-center">
              <img className="w-40 object-contain" src={EmptyIcon} />
              <p className="text-lg">No data available!</p>
            </div>
          </div>
        )}
      </div>

      <ViewMenu
        isVisible={!!values}
        handleCancelModal={handleCancelModal}
        {...values}
      />

      <Modal open={isTaxOpen} handleCancel={() => setIsTaxOpen(false)}>
        <div className="flex flex-col justify-center  p-2">
          <Title label="Taxes" />
          <Form
            requiredMark={false}
            layout="vertical"
            initialValues={taxes}
            onFinish={onSaveTax}
            className=""
          >
            <TextInput {...TaxfieldSet.tax} />
            <TextInput {...TaxfieldSet.gst} />
            <TextInput {...TaxfieldSet.offer} />
            <div className="grid grid-cols-1 mt-4  md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Button
                label="Cancel"
                bg="bg-danger"
                htmlType="button"
                onClick={() => setIsTaxOpen(false)}
              />
              <Button
                disabled={loaded}
                isLoading={loaded}
                label="Save"
                styles="flex-1"
              />
            </div>
          </Form>
        </div>
      </Modal>

      <Confirmation
        handleOpen={onCancel}
        open={false}
        onConfirm={onConfirm}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">
          Do you really want to remove from the employee list?
        </p>
      </Confirmation>
    </main>
  );
};
