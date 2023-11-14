/* eslint-disable react/prop-types */
import { Title, Button } from "../../../components";
import ModalComp from "../../../components/modal";
import { Form, TimePicker } from "antd";
export const AddWaitingTime = ({
  isModalOpen,
  handleCancel,
  onOpenChange,
  onChangeTime,
  times = "",
  onSaveTime,
  open,
}) => {
  return (
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
              styles="text-x text-center text-red-100 rounded-lg !bg-[#FF4B4B]"
              htmlType="button"
              onClick={handleCancel}
            />
            <Button
              isLoading={false}
              label="Set"
              styles="flex-1"
              onClick={onSaveTime}
            />
          </div>
        </Form>
      </>
    </ModalComp>
  );
};
