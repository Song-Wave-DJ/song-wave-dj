export const fieldSet = {
  category: {
    name: "name",
    suffix: false,
    className: "mt-2",
    inputClassName: "py-2",
    label: "Category Name",
    labelCol: {
      className: "child:!text-xxs font-sans",
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
};
