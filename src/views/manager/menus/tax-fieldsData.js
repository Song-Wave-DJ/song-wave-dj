let inputClassName = "py-3";
export const TaxfieldSet = {
  tax: {
    name: "tax",
    label: "Tax(%)",
    suffix: false,
    inputClassName,
    type: "number",
    labelCol: {
      className: "!mt-2 child:!text-xxs font-sans",
    },
    rules: [
      {
        pattern: /^.{0,60}$/,
        message: "maximum length should be 60 characters ",
      },
      { required: true, message: "Tax is requird!" },
    ],
    placeholder: "Tax",
  },
  gst: {
    name: "gst",
    label: "GST(%)",
    suffix: false,
    inputClassName,
    type: "number",
    labelCol: {
      className: "!mt-2 child:!text-xxs font-sans",
    },
    rules: [{ required: true, message: "GST is requird!" }],
    placeholder: "GST",
  },

  offer: {
    name: "offer",
    label: "Offer(%)",
    suffix: false,
    inputClassName,
    type: "number",
    labelCol: {
      className: "!mt-2 child:!text-xxs font-sans",
    },
    rules: [{ required: true, message: "Offer is requird!" }],
    placeholder: "Offer",
  },
};
