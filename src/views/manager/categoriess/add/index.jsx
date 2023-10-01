import { Button, Heading, Modal, TextInput } from "../../../../components";
import { Form } from "antd";
import { fieldSet } from "../fieldsData";

const AddCategory = ({
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
          <Heading label={`${name ? "Edit" : "Add"} Category`} styles="!py-0">
            <p className="text-xs mb-4 mt-2">
              To add a new category, please fill in the details in the fields
              below.
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
            <div className="flex flex-wrap justify-between my-2">
              <Button
                isLoading={false}
                styles="text-red-100 rounded-full bg-gradient-to-r from-red-600 to-red-400 mb-4 md:mb-0 flex-1 mx-2 text-[#000]"
                htmlType="button"
                label="Cancel"
                onClick={handleModal}
              />
              <Button
                isLoading={isMutating}
                label="Save"
                styles="text-purple-100 text-x rounded-full bg-gradient-to-r from-purple-600 to-purple-400 mx-2 flex-1"
              />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddCategory;
