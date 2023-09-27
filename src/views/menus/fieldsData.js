export const fieldSet = {
  category: {
    name: "category",
    suffix: false,
    className: "mb-3",
    inputClassName: "py-2",
    label: "Category Name",
    labelCol: {
      className: "child:!text-xxs !p-0 font-sans",
    },
    rules: [
      {
        required: true,
        message: "Category is required!",
      },
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },

      { type: "text", message: "Invalid value!" },
    ],
    placeholder: "Category Name",
  },
  title: {
    name: "name",
    suffix: false,
    className: "mb-3",
    inputClassName: "py-2",
    label: "Menu Name",
    labelCol: {
      className: "child:!text-xxs !p-0 font-sans",
    },
    rules: [
      {
        required: true,
        message: "Menu name is required!",
      },
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },

      { type: "text", message: "Invalid value!" },
    ],
    placeholder: "Menu Name",
  },
  price: {
    name: "price",
    suffix: false,
    className: "mb-3",
    inputClassName: "py-2",
    label: "Price",
    labelCol: {
      className: "child:!text-xxs !p-0 font-sans",
    },
    rules: [
      {
        required: true,
        message: "Price is required!",
      },
      {
        pattern: /^.{0,20}$/,
        message: "maximum length should be 20 characters ",
      },

      { type: "number", message: "Invalid value!" },
    ],
    placeholder: "Price Name",
  },
  type: {
    name: "type",
    label: "Type",
    labelCol: {
      className: "child:!text-xxs !p-0 font-sans",
    },
    rules: [],
    placeholder: "Type",
  },
};
