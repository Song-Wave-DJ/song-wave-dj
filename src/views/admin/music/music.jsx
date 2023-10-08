import { useState } from "react";
import {
  IconButton,
  Searching,
  TableComponent,
  Confirmation,
  Title,
  Button,
} from "@/components";
import ModalComp from "@/components/modal";
import { Form, TimePicker } from "antd";
import { RenderColor } from "../constanst";
import "../../dj-user/style.css";

const dataSource = [
  {
    id: "12345678",
    name: "Example",
    duration: "4:33",
    createdAt: "12/12/2022 12:00",
    stauts: "Pending",
    waitingTime: "",
  },
  {
    id: "1678",
    name: "Hello john",
    duration: "4:33",
    createdAt: "12/12/2023",
    stauts: "Approved",
    waitingTime: "",
  },
  {
    id: "df12378",
    name: "New songs",
    duration: "4:33",
    createdAt: "12/12/2023",
    stauts: "Rejected",
    waitingTime: "",
  },
];

export const AdminMusic = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const [isModalOpen, isSetModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [times, setTime] = useState({
    timeString: "",
    time: "",
  });
  const [ids, setIds] = useState("");

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const onSetWaitingTime = (id) => {
    isSetModalOpen(true);
    setIds(id);
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  };

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

  const handleCancel = () => {
    isSetModalOpen((prev) => !prev);
    setOpen(false);
    setTime({});
  };

  const onOpenChange = () => {
    setOpen((prev) => !prev);
  };

  const onChangeTime = (time, timeString) => {
    setTime(timeString);
    setTime((prev) => ({
      ...prev,
      time,
      timeString,
    }));
  };

  const onSaveTime = () => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const idx = prevObj?.findIndex((el) => el.id === ids);
      const data = prevObj.find((el) => el.id === ids);
      if (idx !== -1) {
        const newData = {
          ...data,
          waitingTime: times?.timeString,
        };
        prevObj.splice(idx, 1, newData);
      }
      return prevObj;
    });
    handleCancel();
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
      title: "Date & Time",
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

    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, { id }) => (
        <div className="flex flex-wrap">
          <IconButton color="#876CFE" onClick={() => onSetWaitingTime(id)}>
            <span className="text-x text-white">Set Wating Time</span>
          </IconButton>
          <IconButton color="#43D396" onClick={confirmationOpen}>
            <span className="text-white text-x">Accept</span>
          </IconButton>
          <IconButton color="#FF4B4B" onClick={confirmationOpen}>
            <span className="text-white text-x">Reject</span>
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA]  px-4 py-2 rounded-sm text-xs">
          Total Music {"   "} <span className="text-[#3CB5E5]">0</span>
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

      <Confirmation
        handleOpen={confirmationOpen}
        open={isConfirmationOpen}
        onConfirm={confirmationOpen}
        isMutating={false}
      >
        <p className="text-sxx text-[#717171]">Are you sure?</p>
      </Confirmation>

      <ModalComp open={isModalOpen} handleCancel={handleCancel}>
        <>
          <Title label="Set Waiting Time">
            <p className="text-x my-4">
              This to ChangeTimeime wait before your music not approved
            </p>
          </Title>
          <Form classname="my-4" layout="vertical">
            <TimePicker
              open={open}
              className="w-full py-2"
              onOpenChange={onOpenChange}
              onChange={onChangeTime}
              use12Hours
              autoFocus
              value={times?.time}
            />

            <div className="grid grid-cols-1 mt-4  md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Button
                isLoading={false}
                label="Cancel"
                styles="text-x text-center text-red-100 rounded-lg bg-[#FF4B4B]"
                htmlType="button"
                onClick={handleCancel}
              />
              <Button
                isLoading={false}
                label="Set"
                styles="bg-[#43d396]  flex-1"
                onClick={onSaveTime}
              />
            </div>
          </Form>
        </>
      </ModalComp>
    </main>
  );
};
