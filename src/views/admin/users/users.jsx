import { useEffect, useState } from "react";
import { Searching, TableComponent, Confirmation } from "../../../components";
import { DeleteIcon } from "../../../assets";
import { getMethod, postMethod } from "../../../services";

export const Users = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const confirmationOpen = () => {
    setIsConfirmationOpen((prev) => !prev);
  };

  const fetchUsers = async () => {
    setLoading(true);
    const resp = await getMethod("admin_user_list");
    if (resp.message === "ok") {
      const { data } = resp;
      setData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onDeleteWaiter = async (id) => {
    setLoading(true);
    const resp = await postMethod("admin_remove_user", { id });
    if (resp.message === "ok") {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const idx = prevObj.findIndex((el) => el.id === id);
        if (idx !== -1) {
          prevObj.shift(idx, 1);
        }
        return prevObj;
      });
    }
    setLoading(false);
  };

  const columns = [
    {
      title: "S.No.",
      dataIndex: "Sid",
      key: "Sid",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "User Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "UserType",
      dataIndex: "role",
      key: "role",
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
            onClick={() => onDeleteWaiter(id)}
          >
            <DeleteIcon />
          </div>
        </div>
      ),
    },
  ];

  const onChangeSearch = ({ target }) => {
    const { value } = target;
    if (value) {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const filterData = prevObj.filter((item) => {
          const queryName = item.name.toLowerCase();
          const queryEmail = item.email.toLowerCase();
          const queryuserType = item.userType.toLowerCase();
          const query = value.toLowerCase();
          return (
            queryName.includes(query) ||
            queryEmail.includes(query) ||
            queryuserType.includes(query)
          );
        });
        return filterData ?? [];
      });
    }
  };

  return (
    <main className="mx-4 p-4">
      <div className="flex justify-between mb-4 items-center">
        <p className="bg-[#FAFAFA] px-4 py-2 rounded-sm text-xs">
          Total Users{" "}
          <span className="text-[#3CB5E5] text-lg">{data?.length}</span>
        </p>
        <div className="flex flex-1 justify-end gap-4">
          <Searching
            onChange={onChangeSearch}
            styles="flex-[.9] md:flex-[.2] py-2"
          />
        </div>
      </div>
      <TableComponent
        loading={isLoading}
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
          Are you want to lock this user
        </p>
      </Confirmation>
    </main>
  );
};
