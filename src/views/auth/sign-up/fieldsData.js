export const fieldSet = {
  name: {
    className: "!mb-4",
    inputClassName: "py-2",
    label: "Full Name",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Full name is required!",
      },
      { type: "text", message: "Invalid name address!" },
    ],
    placeholder: "Full Name",
  },
  email: {
    className: "!mb-4",
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
  phone: {
    className: "!mb-4",
    inputClassName: "py-2",
    suffix: false,
    label: "Phone",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: false,
        message: "Phone is required!",
      },
      {
        min: 10,
        message: "Invalid Phone  number",
      },
      {
        max: 15,
        message: "Invalid Phone  number",
      },
      {
        pattern: /^[0-9]+$/,
        message: "Phone should be number",
      },
    ],
    placeholder: "Phone",
  },
  password: {
    className: "!mb-2",
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
