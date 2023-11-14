import { Upload } from "antd";
import React, { useState } from "react";
import { EditIcon } from "../../assets";

const ImagePicker = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (info) => {
    const compressedResult = info.file.originFileObj;
    onChange(compressedResult);
    let reader = new FileReader();
    reader.readAsDataURL(compressedResult);
    reader.onload = (e) => {
      setInputValue(e.target.result);
    };
  };

  return (
    <Upload
      listType="picture-circle"
      showUploadList={false}
      onChange={handleChange}
    >
      <img
        className="h-24 w-24 rounded-full object-cover "
        src={inputValue}
        loading="lazy"
      />
      <div className="absolute bottom-3 right-1 bg-white p-1 rounded-full border-2 border-green">
        <EditIcon color="#00BC00" />
      </div>
    </Upload>
  );
};

export default ImagePicker;
