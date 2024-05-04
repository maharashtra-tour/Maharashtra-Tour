import * as Yup from "yup";

export const EnquirySchema = Yup.object({
  name: Yup.string().min(2).max(14).required("Name is required"),
  contact: Yup.string().min(10).max(11).required("Phone number is required"),
  to: Yup.string().required("This is a required field"),
  from: Yup.string().required("This is a required field"),
  journeyDate: Yup.string().required("Journey Date is required"),
  message: Yup.string().required("Message is required"),
});

// name: "",
// contact: "",
// to: "",
// from: "",
// journeyDate: "",
// message: "",
