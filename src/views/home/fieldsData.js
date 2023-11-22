export const fieldSet = {
  name: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "Full Name",
    suffix: false,
    labelCol: {
      className: "child:!text-lg child:!text-white font-sans",
    },
    rules: [
      {
        required: true,
        message: "Name is required!",
      },
      { type: "text", message: "Invalid name address!" },
    ],
    placeholder: "Full Name",
    prefix: false,
  },
  email: {
    className: "!mb-4",
    inputClassName: "py-3",
    suffix: false,
    label: "Email Address",
    labelCol: {
      className: "child:!text-lg font-sans",
    },
    rules: [
      {
        required: true,
        message: "Email is required!",
      },
      { type: "email", message: "Invalid email address!" },
    ],
    placeholder: "Email Address",
  },
  phone: {
    className: "!mb-4",
    inputClassName: "py-3",
    suffix: false,
    label: "Phone",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Phone is required!",
      },
    ],
    placeholder: "Phone",
  },
};
