import React from "react";
import { Modal, Heading, Button } from "..";
import { WarningIcon } from "@/assets";

const Confirmation = ({
  open,
  handleOpen,
  isMutating,
  onConfirm,
  children,
}) => {
  return (
    <>
      <Modal open={open} centered closable={false}>
        <div className="grid place-items-center">
          <img src={WarningIcon} className="w-20" />
          <Heading label="Are you sure?" styles="text-center">
            {children}
          </Heading>
          <div className="flex justify-center my-2 w-full">
            <Button
              isLoading={false}
              styles="!bg-red text-white rounded  flex-[.2] hover:opacity-30 mx-2 p-3 border-2 text-[#000] my-0"
              htmlType="button"
              label="Cancel"
              onClick={handleOpen}
            />
            <Button
              isLoading={isMutating}
              label="Yes, Sure"
              styles="bg-[#3CB5E5] flex-[.2] hover:opacity-30 mx-2 p-3 my-0"
              htmlType="button"
              onClick={onConfirm}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Confirmation;
