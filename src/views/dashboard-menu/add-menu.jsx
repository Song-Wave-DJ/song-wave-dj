import { Form } from "antd";
import React, { useMemo } from "react";
import {
  TextInput,
  Select,
  Switch,
  TextDescription,
  Button,
  Modal,
  Title,
  ImageUploader,
} from "../../components";
import { fieldSet } from "./fieldsData";
import "./style.css";

export const AddDashbardMenu = ({
  onFinish,
  onAddMenu,
  editData,
  modalOpen,
}) => {
  const initialValue = useMemo(() => editData, [editData]);

  return (
    <Modal open={modalOpen} width={800} handleCancel={onAddMenu}>
      <Title label={initialValue?.id ? "Update Menu" : "Add Menu"} />
      <Form
        key={initialValue?.id}
        id={initialValue?.id}
        requiredMark={false}
        layout="vertical"
        onFinish={(payload) => onFinish(payload, initialValue?.id)}
        initialValues={{
          name: initialValue?.name,
          category: initialValue?.category,
          price: initialValue?.price,
          discount: initialValue?.discount,
          description: initialValue?.description,
          type: initialValue?.type,
        }}
        className=""
      >
        <div className="h-[66vh] overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-4 my-6">
          <TextInput {...fieldSet.name} />
          <TextInput {...fieldSet.dish} />
          <TextInput {...fieldSet.price} />
          <TextInput {...fieldSet.discount} />
          <TextDescription {...fieldSet.desciption} />
          <Form.Item {...fieldSet.image}>
            <ImageUploader />
          </Form.Item>
          <Form.Item {...fieldSet.type} className="!mb-0">
            <Switch
              prefixName="VEG"
              suffixName="NON-VEG"
              className="aria-[checked=true]:!bg-green hover:!bg-green-light aria-[checked=false]:bg-bloodRed"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Button
            isLoading={false}
            label="Cancel"
            styles="text-x text-center text-red-100 rounded-lg bg-gradient-to-r from-red-600 to-red-400"
            htmlType="button"
            onClick={onAddMenu}
          />
          <Button
            isLoading={false}
            label="Save"
            styles="text-purple-100 text-x rounded-lg bg-gradient-to-r from-purple-600 to-purple-400  flex-1"
          />
        </div>
      </Form>
    </Modal>
  );
};
