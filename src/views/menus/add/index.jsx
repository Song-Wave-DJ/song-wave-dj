import React, { memo } from "react";

import { Button, Heading, Modal, Switch, TextInput } from "../../../components";
import { Form } from "antd";
import { fieldSet } from "../fieldsData";

const AddMenu = ({
  isVisible,
  handleModal,
  onFinish,
  isMutating,
  name = "",
}) => {
  return (
    <>
      <Modal open={isVisible} handleCancel={handleModal}>
        <div className="p-2">
          <Heading label={`${name ? "Edit" : "Add"} Menu`} styles="!py-0">
            <p className="text-xs mb-4 mt-2">
              To add a new menu, please fill in the details in the fields below.
            </p>
          </Heading>
          <Form
            requiredMark={false}
            key={"Add_Categories"}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              name,
            }}
          >
            <TextInput {...fieldSet.category} />
            <TextInput {...fieldSet.title} />
            <TextInput {...fieldSet.price} />
            <Form.Item {...fieldSet.type}>
              <Switch
                suffixName="NON-VEG"
                prefixName="VEG"
                className="aria-[checked=true]:!bg-green hover:!bg-green-light aria-[checked=false]:bg-bloodRed"
              />
            </Form.Item>
            <div className="flex mt-4 gap-4 flex-wrap justify-between my-2">
              <Button
                isLoading={false}
                styles="text-red-100 rounded-full bg-gradient-to-r from-red-600 to-red-400 mb-4 md:mb-0 flex-1  text-[#000]"
                htmlType="button"
                label="Cancel"
                onClick={handleModal}
              />
              <Button
                isLoading={isMutating}
                label="Add"
                styles="text-purple-100 text-x rounded-full bg-gradient-to-r from-purple-600 to-purple-400  flex-1"
              />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddMenu;
