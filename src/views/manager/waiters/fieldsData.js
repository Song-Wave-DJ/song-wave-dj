export const fieldSet = {
  id: {
    className: "!mb-4",
    inputClassName: "py-2",
    label: "Waiter Id",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: false,
        message: "Name is required!",
      },
      {
        pattern: /^[0-9]+$/,
        message: "Id should be number",
      },
      {
        min: 2,
        message: "Invalid number",
      },
      {
        max: 64,
        message: "Invalid number",
      },
    ],
    placeholder: "Waiter Id",
    prefix: false,
  },
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
        message: "Name is required!",
      },
      { type: "text", message: "Invalid name address!" },
    ],
    placeholder: "Full Name",
    prefix: false,
  },
  email: {
    className: "!mb-4",
    inputClassName: "py-2",
    suffix: false,
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
        required: true,
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
      {
        min: 6,
        message: "Password must be at least 6 characters",
      },
      {
        max: 64,
        message: "Password must be at most 64 characters",
      },
    ],
    placeholder: "Password",
  },
};
