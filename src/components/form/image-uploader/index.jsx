import React from "react";
import { Upload } from "antd";
import Button from "../../button";
import { ImageIcon } from "@/assets";

const ImageUploader = ({ disabled = false, onChange, value }) => {
  const props = {
    name: "file",
    multiple: false,
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onChangeImage = (info) => {
    const { originFileObj } = info.file;
    onChange(originFileObj);
  };

  return (
    <Upload.Dragger
      multiple={false}
      maxCount={1}
      disabled={disabled}
      listType="picture-card"
      {...props}
      defaultFileList={
        value
          ? [
              {
                url: value,
              },
            ]
          : []
      }
      onChange={onChangeImage}
    >
      <div className="flex flex-col justify-center items-center">
        <img src={ImageIcon} className="object-contain" />
        <h2 className="text-xs font-semibold">Drag & Drop</h2>
        <p className="text-xs  text-[#ABABAB] text-center">file to upload</p>
        <p className="text-xs  text-[#ABABAB] text-center">or</p>
        <Button
          styles="bg-[#3CB5E5] hover:!bg-[#3CB5E5] py-4 my-2"
          label="Browser"
          htmlType="button"
        />
      </div>
    </Upload.Dragger>
  );
};

export default ImageUploader;
