let inputClassName = "py-3 !mb-2";
export const fieldSet = {
  name: {
    name: "name",
    label: "Music Name",
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
      { required: true, message: "Music field is requird!" },
    ],
    placeholder: "Music Name",
  },

  artist: {
    name: "artist",
    suffix: false,
    className: "!mb-0",
    inputClassName,
    label: "Artist Name",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Artist name is required!",
      },
      {
        pattern: /^.{0,50}$/,
        message: "maximum length should be 50 characters ",
      },
    ],
    placeholder: "Artist name",
  },

  duration: {
    name: "duration",
    suffix: false,
    className: "!mb-0",
    inputClassName,
    label: "Duration",
    labelCol: {
      className: "child:!text-xxs font-sans",
    },
    rules: [
      {
        required: true,
        message: "Duration is required!",
      },
      {
        pattern: /^.{0,50}$/,
        message: "maximum length should be 50 characters ",
      },
    ],
    placeholder: "Duration",
  },

  image: {
    name: "thumbnail",
    className: "",
    inputClassName: "py-2 ",
    label: "Music Picture",
    labelCol: {
      className: "child:!text-xs",
    },
    rules: [],
    placeholder: "Music Picture",
  },
};
