import { EmptyIcon, PrinterIcon } from "@/assets";
import { Button, TextInput, Title } from "../../../components";
import { Form, QRCode, Space, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ModalComp from "../../../components/modal";
import { getMethod, postMethod } from "../../../services";

const FieldData = {
  inputClassName: "py-2",
  label: "Table No.",
  suffix: false,
  labelCol: {
    className: "child:!text-xxs font-sans",
  },
  rules: [
    {
      required: true,
      message: "Table no is required!",
    },
    { type: "text", message: "Table no. address!" },
  ],
  placeholder: "Table Name",
  prefix: false,
};

export const Table = () => {
  const [tables, setTables] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTable = async () => {
    const resp = await getMethod("get_table");
    if (resp.message === "ok") {
      const { data = [] } = resp;
      setTables(data ?? []);
    }
  };

  useEffect(() => {
    fetchTable();
  }, []);

  const componentRef = useRef();
  const onPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onDeleteTable = async (table_no) => {
    const resp = await postMethod("remove_table", { table_no });
    if (resp?.message === "ok") {
      setTables((prev) => {
        const prevObj = structuredClone(prev);
        const index = prevObj.findIndex((el) => el.table_no === table_no);
        if (index !== -1) {
          prevObj.splice(index, 1);
        }
        return prevObj;
      });
    }
  };

  const onAddTable = async ({ table }) => {
    const resp = await postMethod("set_table", {
      table_no: table,
    });

    if (resp?.message === "ok") {
      fetchTable();
    }
    setIsModalOpen(false);
  };

  return (
    <div className=" p-4">
      <div className="flex justify-between my-6 ">
        <Tooltip placement="bottom" title="Back">
          <Link
            to={"/dashboard/menus"}
            className="bg-[#FAFAFA] px-4 py-2 rounded-md"
          >
            <ArrowLeftOutlined /> Back
          </Link>
        </Tooltip>
        <Button
          isLoading={false}
          onClick={() => setIsModalOpen(true)}
          styles="flex-[.2]"
          label="Add Table"
        />
      </div>
      {tables.length > 0 ? (
        <div className="flex gap-4 flex-wrap justify-center">
          {tables.map((item) => (
            <div
              key={item.id}
              className="py-4 w-80 h-96 px-2 flex flex-col justify-start  rounded-lg border  cursor-pointer hover:shadow-lg relative"
            >
              <p
                onClick={() => onDeleteTable(item.table_no)}
                className="bg-danger absolute text-white text-center right-2 rounded-full w-6 h-6 top-1 "
              >
                x
              </p>
              <div ref={componentRef}>
                <Space direction="vertical" align="center">
                  <QRCode size={200} value={item.url || "-"} />
                </Space>
                <h1 className="text-2xl mt-6 text-center font-semibold">
                  Table No: {item.table_no}
                </h1>
              </div>

              <div
                className="w-14 object-contain m-auto cursor-pointer"
                onClick={onPrint}
              >
                <img className="w-full h-full" src={PrinterIcon} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img className="w-40 object-contain" src={EmptyIcon} />
          <p className="text-lg">No data available!</p>
        </div>
      )}

      <ModalComp
        open={isModalOpen}
        handleCancel={() => setIsModalOpen(false)}
        title="Choose"
      >
        <Title label="Add Table" styles="text-lg" />

        <Form
          name="add-waiter"
          onFinish={onAddTable}
          requiredMark={false}
          layout="vertical"
          key={Math.random()}
        >
          <TextInput className="mb-4" name="table" {...FieldData} />
          <div className="flex gap-4">
            <Button
              onClick={() => setIsModalOpen(false)}
              label="Cancel"
              htmlType="button"
              styles="!bg-danger rounded-lg w-full !mt-4"
            />
            <Button label="Save" styles="rounded-lg w-full !mt-4" />
          </div>
        </Form>
      </ModalComp>
    </div>
  );
};
