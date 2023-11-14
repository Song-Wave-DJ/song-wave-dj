import {
  Button,
  Confirmation,
  IconButton,
  Searching,
  TableComponent,
} from "../../components";
import { useState } from "react";
import { DeleteIcon, EditIcon } from "../../assets";
import { RenderColor } from "../admin/constanst";
import { AddNewMusic } from "./component/add-new-music";
import { AddWaitingTime } from "./component/add-waiting-time";
import "./style.css";

const dataSource = [
  {
    id: "12345678",
    name: "Example",
    duration: "4:33",
    artist: "Example",

    createdAt: "12/12/2022 12:00",
    stauts: "Pending",
    waitingTime: "",
    thumbnail: "",
  },
  {
    id: "1678",
    name: "Hello john",
    duration: "4:33",
    createdAt: "12/12/2023",
    stauts: "Approved",
    waitingTime: "",
    artist: "Example",
    thumbnail: "",
  },
  {
    id: "df12378",
    name: "New songs",
    duration: "4:33",
    createdAt: "12/12/2023",
    stauts: "Rejected",
    waitingTime: "",
    artist: "Example",
    thumbnail: "",
  },
];

export const DJUser = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const [isModalOpen, isSetModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [times, setTime] = useState({
    timeString: "",
    time: "",
  });
  const [ids, setIds] = useState("");
  const [editData, setEditData] = useState(null);

  const [isAdd, isSetAdd] = useState(false);

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

  const onAddNewMusic = () => {
    isSetAdd(true);
  };

  const onDeleteMusic = (id) => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const idx = prevObj?.findIndex((el) => el.id === id);
      if (idx !== -1) {
        prevObj.splice(idx, 1);
      }
      return prevObj;
    });
  };

  const onEditMusic = (id) => {
    const singleData = data.find((el) => el.id === id);
    setEditData(singleData);
    isSetAdd(true);
  };

  const columns = [
    {
      title: "Thumnail",
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
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
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
        <p className="text-lg ">{waitingTime ? waitingTime : "--"}</p>
      ),
    },
    {
      title: "Status",
      dataIndex: "stauts",
      key: "stauts",
      render: (_, { stauts }) => (
        <p
          className="text-lg "
          style={{
            color: RenderColor[stauts],
          }}
        >
          {stauts}
        </p>
      ),
    },
    {
      title: "Request Action",
      dataIndex: "request",
      key: "Action",
      render: (_, { id }) => (
        <div className="flex flex-wrap">
          <IconButton color="#876CFE" onClick={() => onSetWaitingTime(id)}>
            <span className="text-x text-white whitespace-nowrap">
              Set Wating Time
            </span>
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
    {
      title: "Action",
      dataIndex: "address",
      key: "Action",
      render: (_, { id }) => (
        <div className="flex flex-wrap gap-4">
          <div
            className="bg-[#876CFE] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full"
            onClick={() => onEditMusic(id)}
          >
            <EditIcon color="#fff" />
          </div>

          <div
            className="bg-danger cursor-pointer w-8 h-8 flex items-center justify-center rounded-full"
            onClick={() => onDeleteMusic(id)}
          >
            <DeleteIcon color="#fff" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="mx-4 p-4">
      <div className="flex md:flex-row flex-col gap-4 justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA] px-4 py-2 rounded-sm text-xs">
          Total Music {"   "} <span className="text-[#3CB5E5]">0</span>
        </p>
        <div className="flex gap-4 flex-1 md:flex-[.4]">
          <Button
            isLoading={false}
            label="Add Music"
            styles="w-3/2"
            onClick={onAddNewMusic}
          />
          <Searching onChange={onChange} styles="py-2" />
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
        <p className="text-sxx text-[#717171]">Are you sure?</p>
      </Confirmation>
      <AddWaitingTime
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        onOpenChange={onOpenChange}
        onChangeTime={onChangeTime}
        times={times}
        onSaveTime={onSaveTime}
        open={open}
      />
      <AddNewMusic
        editData={editData}
        isAdd={isAdd}
        isSetAdd={isSetAdd}
        setEditData={setEditData}
      />
    </main>
  );
};
