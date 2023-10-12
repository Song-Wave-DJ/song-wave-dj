import { TableComponent } from "@/components";
import { RenderColor } from "../../admin/constanst";
import { Tooltip } from "antd";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { DateRange } from "../../../components";
import { useState } from "react";

const dataSource = [
  {
    date: "10/11/2023, 9:24:42 PM",
    stauts: "Approve",
  },
  {
    date: "10/11/2023, 9:24:42 PM",
    stauts: "Weekly Leave",
  },
  {
    date: "10/11/2023, 9:24:42 PM",
    stauts: "Leave",
  },
];

// eslint-disable-next-line react/prop-types
export const AttendeceLogs = () => {
  const [data, setData] = useState(dataSource);
  const [dateRange, setDateRange] = useState(null);

  const { id } = useParams();

  const onChangeDateRange = (val) => {
    setDateRange(val);
  };
  const columns = [
    {
      title: "S.No.",
      dataIndex: "id",
      key: "id",
      render: (_, record, index) => <p>{index + 1}</p>,
    },

    {
      title: "Date & Time",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Attendence Status",
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

        <DateRange
          onChangeDateRange={onChangeDateRange}
          dateRange={dateRange}
        />
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
