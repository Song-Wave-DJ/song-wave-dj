export const fieldSet = {
  email: {
    className: "mb-4",
    inputClassName: "py-2",
    label: "Email Address",
    labelCol: {
      className: "child:!text-xxs font-sans",
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
  password: {
    className: "mb-2",
    inputClassName: "py-2",
    label: "Password",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Password is required!",
      },
    ],
    placeholder: "Password",
  },
};
