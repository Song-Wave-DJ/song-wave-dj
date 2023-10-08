import { useState } from "react";
import {
  IconButton,
  Searching,
  TableComponent,
  Confirmation,
} from "@/components";
import ModalComp from "@/components/modal";
import { Summary } from "../../menu/components/summary";

const dataSource = [
  {
    id: "12345678",
    table: 12,
    price: 1230,
    createdAt: "12/12/2022 12:00",
    stauts: "Pending",
  },
  {
    id: "1678",
    table: 12,
    price: 900,
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
    table: 10,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Pending",
  },
  {
    id: "12378",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accept",
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
  Accept: "#43D396",
  Pending: "#f8d75dc1",
  Reject: "#FF4B4B",
};

export const AdminOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

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
      render: () => (
        <div className="flex flex-wrap">
          <IconButton color="#43D396" onClick={confirmationOpen}>
            <span className="text-white text-x">Received</span>
          </IconButton>
          <IconButton color="#FF4B4B" onClick={confirmationOpen}>
            <span className="text-white text-x">Decline</span>
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
          <IconButton color="#876CFE" onClick={() => setIsModalOpen(true)}>
            <span className="text-x text-white">View</span>
          </IconButton>
          {record.stauts === "Accept" && (
            <IconButton color="#43D396" onClick={confirmationOpen}>
              <span className="text-white cursor-not-allowed text-x">
                Accept
              </span>
            </IconButton>
          )}

          {record.stauts === "Reject" && (
            <IconButton color="#FF4B4B" onClick={confirmationOpen}>
              <span className="text-white cursor-not-allowed text-x">
                Reject
              </span>
            </IconButton>
          )}
          {record.stauts === "Pending" && (
            <>
              <IconButton color="#f8d75dc1" onClick={confirmationOpen}>
                <span className="text-white text-x">Accept</span>
              </IconButton>
              <IconButton color="#FF4B4B" onClick={confirmationOpen}>
                <span className="text-white text-x">Reject</span>
              </IconButton>
            </>
          )}
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
          const queryTabel = item.table.toString();
          const queryPrice = item.price.toString();
          const queryStatus = item.stauts?.toLowerCase();
          const query = value.toLowerCase();
          return (
            queryTabel.includes(query) ||
            queryStatus.includes(query) ||
            queryPrice.includes(query)
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
        <p className="bg-[#FAFAFA]  px-4 py-2 rounded-sm text-xs">
          Total orders items{"   "} <span className="text-[#3CB5E5]">0</span>
        </p>

        <Searching onChange={onChange} styles="flex-[.9] md:flex-[.2] py-2" />
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
          <h2 className="text-s">Order Summary</h2>
          <div className="my-4 flex justify-between">
            <span className=" text-xs font-semibold">Name</span>
            <span className=" text-xs font-semibold">Quantity</span>
            <span className=" text-xs font-semibold">Price</span>
          </div>

          <Summary carts={[]} tax={10} gst={10} offer={300} total={400} />
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
