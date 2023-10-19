import { useState } from "react";
import { Searching, TableComponent } from "@/components";
import { RenderColor } from "../constanst";
import { Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const dataSource = [
  {
    id: "12345678",
    name: "Example",
    duration: "4:33",
    createdAt: "12/12/2022 12:00",
    stauts: "Pending",
    waitingTime: "10min",
  },
  {
    id: "1678",
    name: "Hello john",
    duration: "4:33",
    createdAt: "12/12/2023",
    stauts: "Approved",
    waitingTime: "10min",
  },
  {
    id: "df12378",
    name: "New songs",
    duration: "4:33",
    createdAt: "12/12/2023",
    stauts: "Rejected",
    waitingTime: "10min",
  },
];

export const MusicHistory = () => {
  const [data, setData] = useState(dataSource);
  const { state = {} } = useLocation();

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

  const columns = [
    {
      title: "Request Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Music Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Waiting Time",
      dataIndex: "waitingTime",
      key: "waitingTime",
      render: (_, { waitingTime }) => (
        <p className="text-lg">{waitingTime ? waitingTime : "--"}</p>
      ),
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
  ];

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between mb-4 items-center">
        <div className="flex items-center gap-2">
          <Tooltip placement="bottom" title="Back">
            <Link
              to="/admin-dashboard/musics"
              className="bg-[#FAFAFA] px-4 py-2 rounded-md"
            >
              <ArrowLeftOutlined />
            </Link>
          </Tooltip>
          <p className="bg-[#FAFAFA] px-4 py-2 rounded-md text-lg font-semibold ">
            {state?.name}
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
    </main>
  );
};
