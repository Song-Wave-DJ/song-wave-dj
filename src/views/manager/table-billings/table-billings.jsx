import { useRef, useState } from "react";
import {
  IconButton,
  Searching,
  TableComponent,
  Confirmation,
} from "../../../components";
import ModalComp from "../../../components/modal";
import { Summary } from "../../menu/components/summary";
import { RenderColor } from "../../admin/constanst";
import { Tooltip } from "antd";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { DateRange } from "../../../components";
import { Button } from "../../../components";
import { useReactToPrint } from "react-to-print";

const Carts = [
  {
    id: "8f6a27c5-d79b-46ad-b339-67859d07a074",
    title: "Parmesan Crusted Potatoes",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
  {
    id: "d2b62d16-b203-4002-af80-24f542119664",
    title: "Samosa Recipe",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
  {
    id: "82fbef80-9870-4277-b514-8874af40adb8",
    title: "Papdi Chaat (Dahi Papri Chaat)",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
  {
    id: "04de4b8d-793c-4b99-95e8-17b69c1d089e",
    title: "Samosa Recipe",
    price: 234,
    qty: 1,
    type: "veg",
    ml: null,
  },
];

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
export const TableBillings = ({ fromAdmin = false, isEmployee = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const [dateRange, setDateRange] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const componentRef = useRef();

  const onPrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { id } = useParams();

  const backRoute = useMemo(() => {
    if (fromAdmin) return "/admin-dashboard/billings";
    else if (isEmployee) return "/employee/billings";
    else return "/dashboard/billings";
  }, [isEmployee, fromAdmin]);

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
            <IconButton color="#f8d75dc1" onClick={() => setIsOpen(true)}>
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
            <Link to={backRoute} className="bg-[#FAFAFA] px-4 py-2 rounded-md">
              <ArrowLeftOutlined />
            </Link>
          </Tooltip>
          <p className="bg-[#FAFAFA] px-4 py-2 rounded-md text-lg font-semibold ">
            Table No: <span className="text-primary text-lg">{id ?? "00"}</span>
          </p>
        </div>

        <div className="flex flex-[.4] gap-4">
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

      <ModalComp open={isModalOpen} width={1024} handleCancel={handleCancel}>
        <>
          <h2 className="text-xl font-semibold my-2">Order Summary</h2>
          <h2 className="text-lg">GST No. : 1234567</h2>
          <div className="my-4 flex justify-between">
            <span className=" text-xs font-semibold">Name</span>
            <span className=" text-xs font-semibold">Quantity</span>
            <span className=" text-xs font-semibold">Price</span>
          </div>

          <Summary carts={Carts} tax={10} gst={10} offer={10} total={400} />
        </>
      </ModalComp>

      <ModalComp
        width={1024}
        open={isOpen}
        handleCancel={() => setIsOpen(false)}
      >
        <>
          <div ref={componentRef} className="px-4">
            <h2 className="text-lg font-semibold my-2">Order Summary</h2>
            <div className="p-2">
              <h2 className="text-lg">Transation Id : 1234567</h2>
              <h2 className="text-lg">GST No. : 1234567</h2>
              <div className="my-4 flex justify-between">
                <span className="text-xs font-semibold w-[33%]">Name</span>
                <span className="text-xs font-semibold w-[33%]">Quantity</span>
                <span className="text-xs font-semibold">Price</span>
              </div>

              <Summary carts={Carts} tax={10} gst={10} offer={10} total={400} />
            </div>
          </div>
          <Button
            isLoading={false}
            label="Print Bill"
            styles="rounded-lg mt-4 w-full"
            onClick={onPrint}
          />
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
