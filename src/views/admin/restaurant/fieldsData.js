export const fieldSet = {
  name: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "Owner Name",
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
    inputClassName: "py-3",
    suffix: false,
    label: "Owner Email Address",
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
    className: "!mb-2",
    inputClassName: "py-3",
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
        message: "Password must be at least 8 characters",
      },
      {
        max: 64,
        message: "Password must be at most 64 characters",
      },
      {
        pattern: /^.*(?=.{6,64})*$/,
        message:
          "Password must consist of 1 uppercase letter, 1 number, and 1 special character",
      },
    ],
    placeholder: "Password",
  },
  gstNo: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "GST No.",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "GST No. is required!",
      },
      { type: "text", message: "Invalid GST No. address!" },
    ],
    placeholder: "Full Name",
    prefix: false,
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
  address: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "Address",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Address is required!",
      },
      { type: "text", message: "Invalid Address address!" },
    ],
    placeholder: "Address",
    prefix: false,
  },
  address2: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "Address (Optional)",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: false,
        message: "Address is required!",
      },
    ],
    placeholder: "Optional Address",
    prefix: false,
  },
  pin: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "Zip Code",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Zip Code is required!",
      },
      { type: "text", message: "Invalid name address!" },
    ],
    placeholder: "Zip Code",
    prefix: false,
  },
  city: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "City",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "City is required!",
      },
      { type: "text", message: "Invalid name address!" },
    ],
    placeholder: "City",
    prefix: false,
  },
  state: {
    className: "!mb-4",
    inputClassName: "py-3",
    label: "State",
    suffix: false,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "State is required!",
      },
      { type: "text", message: "Invalid State address!" },
    ],
    placeholder: "State",
    prefix: false,
  },
};
