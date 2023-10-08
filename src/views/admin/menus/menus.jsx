import { useState } from "react";
import { Searching, TableComponent, Confirmation } from "@/components";
import { DeleteIcon } from "@/assets";
import { RenderColor } from "../constanst";
import ViewMenu from "../../manager/menus/view-menu";
import { ViewIcon } from "../../../assets";

const dataSource = [
  {
    id: "12345678",
    stauts: "Approved",
    name: "Chiken",
    price: "123456788",
    category: "Starter",
    image:
      "https://www.allrecipes.com/thmb/KroyBwHCvPe0cZC-SlOwQ1hLjhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/827520-0770a4963900479c9b0d29b3c828e557.jpg",
    createdAt: "30-09-2023",
    type: "veg",
  },
];

export const AdminMenus = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelModal = () => {
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
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, { image }) => (
        <div className="w-20">
          <img
            src={image}
            className="w-full h-full object-contain rounded-md"
            alt=""
          />
        </div>
      ),
    },
    {
      title: "Menu Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category Name",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
      title: "Price",
      dataIndex: "price",
      key: "price",
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
            onClick={handleCancelModal}
          >
            <ViewIcon />
          </div>
          <div
            className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center p-2 bg-[#FAFAFA]"
            onClick={() => onDeleteWaiter(id)}
          >
            <DeleteIcon />
          </div>
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
          const querycategory = item.category?.toString();
          const queryName = item.name?.toString();
          const queryPrice = item.price?.toString();
          const queryType = item.type?.toString();
          const query = value.toLowerCase();
          return (
            queryName?.includes(query) ||
            querycategory?.includes(query) ||
            queryPrice?.includes(query) ||
            queryType?.includes(query)
          );
        });
        return filterData;
      });
    } else {
      setData(dataSource);
    }
  };

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA] px-4 py-2 rounded-sm text-xs">
          Total Managers{" "}
          <span className="text-[#3CB5E5] text-lg">{data?.length}</span>
        </p>
        <div className="flex flex-1 justify-end gap-4">
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

      <Confirmation
        handleOpen={confirmationOpen}
        open={isConfirmationOpen}
        onConfirm={confirmationOpen}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">
          Are you want to delete this menu
        </p>
      </Confirmation>
      <ViewMenu
        isVisible={isModalOpen}
        handleCancelModal={handleCancelModal}
        category={"Name"}
        price={30}
      />
    </main>
  );
};
