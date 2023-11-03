let inputClassName = "py-3 !mb-0";
export const fieldSet = {
  name: {
    name: "category",
    label: "Category Name",
    suffix: false,
    inputClassName,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },
      { required: true, message: "Category field is requird!" },
    ],
    placeholder: "Category Name",
  },

  categoryId: {
    name: "categoryId",
    label: "Category Id",
    suffix: false,
    inputClassName,
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },
      { required: true, message: "Category field is requird!" },
    ],
    placeholder: "Category Id",
  },

  dish: {
    name: "name",
    suffix: false,
    className: "!mb-0",
    inputClassName,
    label: "Food Name",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Menu Name is required!",
      },
      {
        pattern: /^.{0,50}$/,
        message: "maximum length should be 50 characters ",
      },
    ],
    placeholder: "Food name",
  },
  dishId: {
    name: "dishId",
    suffix: false,
    className: "!mb-0",
    inputClassName,
    label: "Food Id",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Food Id is required!",
      },
      {
        pattern: /^.{0,50}$/,
        message: "maximum length should be 50 characters ",
      },
    ],
    placeholder: "Food Id",
  },

  price: {
    name: "price",
    suffix: false,
    className: "",
    inputClassName,
    label: "Price",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Price is required!",
      },
      {
        pattern: /^[+-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$/,
        message: "Invalid value!",
      },
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },
    ],
    placeholder: "Price",
  },

  discount: {
    name: "discount",
    suffix: false,
    className: "",
    inputClassName,
    label: "Discount(%)",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: false,
        message: "Discount is required!",
      },
      {
        pattern: /^[+-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$/,
        message: "Invalid value!",
      },
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },
    ],
    placeholder: "Discount",
  },

  desciption: {
    name: "description",
    suffix: false,
    className: "col-span-1 md:col-span-2",
    inputClassName: "py-2 ",
    label: "Decription",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        pattern: /^.{0,600}$/,
        message: "maximum length should be 600 characters ",
      },
    ],
    placeholder: "Decription",
  },
  thumbnail: {
    name: "thumbnail",
    suffix: false,
    className: "col-span-1 md:col-span-2",
    inputClassName: "py-2 ",
    label: "Food Url",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        pattern: /^.{0,600}$/,
        message: "maximum length should be 600 characters ",
      },
    ],
    placeholder: "https://example.com",
  },

  type: {
    name: "type",
    label: "Type",
    labelCol: {
      className: "child:!text-xxs",
    },
    rules: [],
    placeholder: "Type",
  },
  available: {
    name: "available",
    label: "Availability",
    labelCol: {
      className: "child:!text-xxs",
    },
    rules: [],
    placeholder: "Available",
  },

  image: {
    name: "image",
    className: "",
    inputClassName: "py-2 col-span-2",
    label: "Menu Picture",
    labelCol: {
      className: "child:!text-xs col-span-2	",
    },
    rules: [],
    placeholder: "Menu Picture",
  },
};
