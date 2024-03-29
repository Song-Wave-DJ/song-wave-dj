/* eslint-disable react/prop-types */
import { Form } from "antd";
import { useMemo } from "react";
import {
  TextInput,
  Switch,
  TextDescription,
  Button,
  Modal,
  Title,
  ImageUploader,
} from "../../../components";
import { fieldSet } from "./fieldsData";
import "./style.css";

export const AddDashbardMenu = ({
  onFinish,
  onAddMenu,
  editData,
  modalOpen,
  isLoading,
}) => {
  const initialValue = useMemo(() => editData, [editData]);

  return (
    <Modal open={modalOpen} width={800} handleCancel={onAddMenu}>
      <Title label={initialValue?.id ? "Update Menu" : "Add Menu"} />
      <Form
        key={Math.random()}
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
          available: initialValue?.available ? initialValue?.available : true,
        }}
        className=""
      >
        <div className="h-[66vh] overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-4 my-6">
          <TextInput {...fieldSet.name} />
          <TextInput {...fieldSet.categoryId} />

          <TextInput {...fieldSet.dish} />
          <TextInput {...fieldSet.dishId} />

          <TextInput {...fieldSet.price} />
          <TextInput {...fieldSet.discount} />
          <TextInput {...fieldSet.thumbnail} />

          <TextDescription {...fieldSet.desciption} />

          <Form.Item {...fieldSet.type} className="!mb-0">
            <Switch
              prefixName="VEG"
              suffixName="NON-VEG"
              className="aria-[checked=true]:!bg-green hover:!bg-green-light aria-[checked=false]:bg-bloodRed"
            />
          </Form.Item>
          <Form.Item {...fieldSet.available} className="!mb-0">
            <Switch
              prefixName="Availabel"
              suffixName="Not Availabel"
              className="aria-[checked=true]:!bg-green hover:!bg-green-light aria-[checked=false]:bg-bloodRed"
            />
          </Form.Item>
          <Form.Item {...fieldSet.image}>
            <ImageUploader />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Button
            isLoading={false}
            label="Cancel"
            bg="!bg-danger"
            htmlType="button"
            onClick={onAddMenu}
          />
          <Button isLoading={isLoading} label="Save" styles="flex-1" />
        </div>
      </Form>
    </Modal>
  );
};
