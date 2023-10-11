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
import { DateRange } from "../../../components";
import { useState } from "react";

const dataSource = [
  {
    name: "John Deo",
    table: 12,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accepted",
  },
  {
    name: "John Deo",
    table: 212,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Accepted",
  },
  {
    name: "John Deo",
    table: 1232,
    price: 1230,
    createdAt: "12/12/2023",
    stauts: "Rejected",
  },
];

// eslint-disable-next-line react/prop-types
export const WaiterOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const [dateRange, setDateRange] = useState(null);

  const { id } = useParams();

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const onChangeDateRange = (val) => {
    setDateRange(val);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "OrderId",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Table No.",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Payment Status",
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
      title: "Order Status",
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
              to="/dashboard/waiter"
              className="bg-[#FAFAFA] px-4 py-2 rounded-md"
            >
              <ArrowLeftOutlined />
            </Link>
          </Tooltip>
          <p className="bg-[#FAFAFA] px-4 py-2 rounded-md text-lg font-semibold ">
            John deo
          </p>
        </div>

        <div className="flex flex-[.4] gap-4 items-center">
          <Searching onChange={onChange} styles="py-2" />
          <DateRange
            onChangeDateRange={onChangeDateRange}
            dateRange={dateRange}
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
