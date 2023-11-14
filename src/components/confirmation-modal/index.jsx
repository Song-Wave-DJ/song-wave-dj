import React from "react";
import { Modal, Heading, Button } from "..";
import { WarningIcon } from "../../assets";

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
          <div className="flex justify-center gap-4 mt-6 w-full">
            <Button
              isLoading={false}
              htmlType="button"
              label="Cancel"
              bg="bg-danger"
              onClick={handleOpen}
            />
            <Button
              isLoading={isMutating}
              label="Yes, Sure"
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
