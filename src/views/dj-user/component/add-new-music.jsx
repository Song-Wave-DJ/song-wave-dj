/* eslint-disable react/prop-types */
import ModalComp from "../../../components/modal";
import { Form } from "antd";
import { Button, Title, ImageUploader, TextInput } from "../../../components";
import { fieldSet } from "./fieldsData";

export const AddNewMusic = ({ isAdd, isSetAdd, editData, setEditData }) => {
  const handleCancel = () => {
    isSetAdd((prev) => !prev);
    setEditData(null);
  };

  return (
    <ModalComp open={isAdd} handleCancel={handleCancel}>
      <>
        <Title label={!editData ? "Add New Music" : "Update New Music"}></Title>
        <Form
          requiredMark={false}
          classname="my-4  w-full"
          layout="vertical"
          key={editData?.id}
          initialValues={{
            ...editData,
          }}
        >
          {/* body */}
          <div className="flex flex-col md:flex-row flex-wrap gap-2">
            <TextInput {...fieldSet.name} className="w-full" />
            <TextInput {...fieldSet.artist} className="w-full md:w-[48%]" />

            <TextInput {...fieldSet.duration} className=" w-full md:w-1/2" />
            <Form.Item {...fieldSet.image} className="flex-1">
              <ImageUploader />
            </Form.Item>
          </div>

          <div className="mt-4 flex flex-col-reverse md:flex-row  gap-3">
            <Button
              isLoading={false}
              label="Cancel"
              bg="!bg-danger"
              htmlType="button"
              onClick={handleCancel}
            />
            <Button isLoading={false} label={!editData ? "Add" : "Update"} />
          </div>
        </Form>
      </>
    </ModalComp>
  );
};
