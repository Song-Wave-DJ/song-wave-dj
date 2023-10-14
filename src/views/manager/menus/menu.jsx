import { useState } from "react";

import { Button, Confirmation, Searching } from "../../../components";
import ViewMenu from "./view-menu";
import { MenuCard } from "./menu-card";
import { AddDashbardMenu } from "./add-menu";
import { EmptyIcon } from "../../../assets";
import { Link } from "react-router-dom";

const DummyData = [
  {
    id: self.crypto.randomUUID(),
    name: "Chicken",
    category: "Non-veg",
    price: 234,
    discount: 0,
    description:
      "Savor the deliciousness of tender chicken cooked to perfection. This mouthwatering dish is a favorite among meat lovers, offering a delightful blend of flavors and spices. ",
    type: "veg",
    imageUrl:
      "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
  },
  {
    id: self.crypto.randomUUID(),
    name: "Pizza",
    category: "Veg",
    price: 234,
    discount: 0,
    description:
      "A pizza topped with a variety of vegetables like bell peppers, onions, mushrooms, and olives",
    type: "Veg",
    imageUrl:
      "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
  },
  {
    id: self.crypto.randomUUID(),
    name: "Crispy and golden potato fries that are a staple",
    category: "Veg",
    price: 234,
    discount: 0,
    description:
      "Crispy and golden potato fries that are a staple at fast food restaurants",
    type: "non-veg",
    imageUrl:
      "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
  },
  {
    id: self.crypto.randomUUID(),
    name: "Chicken",
    category: "Non-veg",
    price: 234,
    discount: 0,
    description:
      "Savor the deliciousness of tender chicken cooked to perfection. This mouthwatering dish is a favorite among meat lovers, offering a delightful blend of flavors and spices. Whether grilled, fried, or served in a rich sauce, our chicken dish is sure to satisfy your cravings. Enjoy the savory taste of non-veg cuisine!",
    type: "non-veg",
    imageUrl:
      "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
  },
];

export const Menus = () => {
  const [values, setValues] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [editData, setEditData] = useState({
    name: "",
    type: true,
    discount: "",
    description: "",
    price: "",
    available: true,
  });
  const [datas, setData] = useState(DummyData);
  // Hooks

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
      setData(searchData);
    } else {
      setData(DummyData);
    }
  };

  const handleDelete = (id) => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const idx = prevObj.findIndex((el) => el.id === id);
      if (idx !== -1) {
        prevObj.splice(idx, 1);
      }
      return prevObj;
    });
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

  const onSaveMenu = (payload, id) => {
    if (id) {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const data = prevObj.find((el) => el.id === id);
        const idx = prevObj.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const newData = {
            ...data,
            ...payload,
            type: payload?.type ? "Veg" : "Non-Veg",
            id,
          };
          prevObj.splice(idx, 1, newData);
        }

        return prevObj;
      });
    } else {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const newData = {
          ...payload,
          type: payload?.type ? "Veg" : "Non-Veg",
          id: self.crypto.randomUUID(),
          imageUrl:
            "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
        };
        prevObj.unshift(newData);
        return prevObj;
      });
    }
    setEditData({
      name: "",
      type: true,
      discount: "",
      description: "",
      price: "",
    });
    setModalOpen((prev) => !prev);
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

  return (
    <main className="mx-4 p-4">
      <div className="flex flex-wrap justify-end items-center mb-4">
        <div className="flex justify-end items-center gap-2">
          <Link to="/dashboard/table">
            <Button label="Table" styles="rounded-lg" />
          </Link>
          <Button
            isLoading={false}
            label="Add Menu"
            styles="rounded-lg "
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
          <div className="flex flex-col items-center">
            <img className="w-40 object-contain" src={EmptyIcon} />
            <p className="text-lg">No data available!</p>
          </div>
        )}
      </div>

      <ViewMenu
        isVisible={!!values}
        handleCancelModal={handleCancelModal}
        {...values}
      />
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
