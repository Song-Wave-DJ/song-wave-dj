/* eslint-disable react/prop-types */
import ModalComp from "../../../../components/modal";
import { Title, Button, TextInput } from "../../../../components";
import { Form } from "antd";

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

export const MoveTable = ({
  isMoveTable,
  onMoveTable,
  tableNo,
  onUpdateTable,
}) => {
  return (
    <ModalComp open={isMoveTable} handleCancel={onMoveTable} title="Choose">
      <Title label="Update Table" styles="text-lg" />

      <Form
        name="add-waiter"
        requiredMark={false}
        layout="vertical"
        onFinish={onUpdateTable}
        key={tableNo}
        initialValues={{
          table: tableNo,
        }}
      >
        <TextInput className="mb-4" name="table" {...FieldData} />
        <Button label="Save" styles="rounded-lg w-full !mt-4" />
      </Form>
    </ModalComp>
  );
};
