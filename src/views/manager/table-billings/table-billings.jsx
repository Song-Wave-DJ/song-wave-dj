import { useState } from "react";
import {
  IconButton,
  Searching,
  TableComponent,
  Confirmation,
} from "@/components";
import ModalComp from "@/components/modal";
import { Summary } from "../../menu/components/summary";
import { RenderColor } from "../../admin/constanst";
import { Tooltip } from "antd";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const dataSource = [
  {
    id: "12378",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accepted",
  },
  {
    id: "12345673238",
    table: 212,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accepted",
  },
  {
    id: "123453673238",
    table: 1232,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Rejected",
  },
];

// eslint-disable-next-line react/prop-types
export const TableBillings = ({ fromAdmin = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const { id } = useParams();

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const columns = [
    {
      title: "Transation Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Total",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date",
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
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, { stauts }) => (
        <div className="flex flex-wrap">
          <IconButton color="#876CFE" onClick={() => setIsModalOpen(true)}>
            <span className="text-x px-2 text-white">Bill</span>
          </IconButton>
          {stauts === "Accepted" && (
            <IconButton color="#f8d75dc1">
              <span className="text-x text-white">Print</span>
            </IconButton>
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
        <div className="flex items-center gap-2">
          <Tooltip placement="bottom" title="Back">
            <Link
              to={
                !fromAdmin ? "/dashboard/billings" : "/admin-dashboard/billings"
              }
              className="bg-[#FAFAFA] px-4 py-2 rounded-md"
            >
              <ArrowLeftOutlined />
            </Link>
          </Tooltip>
          <p className="bg-[#FAFAFA] px-4 py-2 rounded-md text-lg font-semibold ">
            Table No: <span className="text-primary text-lg">{id ?? "00"}</span>
          </p>
        </div>

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
          <h2 className="text-lg font-semibold my-2">Order Summary</h2>
          <h2 className="text-lg">GST No. : 1234567</h2>
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
