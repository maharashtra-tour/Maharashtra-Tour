import { useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { EnquirySchema } from "@/app/components/EnquirySchema/EnquirySchema";
import CustomInput from "../CustomInput";

const initialValues = {
  pickupLocation: "",
  dropLocation: "",
  name: "",
  phonenumber: "",
  dateTime: "",
  passengers: "",
};

const BookNowForm = () => {
  const form = useRef(null);
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: EnquirySchema,
    onSubmit: (values) => {},
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5zjan3",
          "template_f8ryz0",
          form.current,
          "UNiDF4Tzgc6tvZkW"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      resetForm();
    }
  };
  return (
    <div className="flex text-center flex-col shadow-2xl rounded-lg p-6 ">
      <p className=" mb-4 font-semibold text-2xl">Book cabs now</p>
      <form onSubmit={sendEmail} ref={form} className="space-y-2 ">
        <CustomInput
          type="text"
          placeholder="Enter your pickup location"
          name="pickupLocation"
          className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
          value={values.pickupLocation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.pickupLocation}
          touched={touched.pickupLocation}
        />
        <CustomInput
          type="text"
          placeholder="Enter your drop location"
          name="dropLocation"
          className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
          value={values.dropLocation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.dropLocation}
          touched={touched.dropLocation}
        />

        <CustomInput
          type="text"
          placeholder="Enter your name"
          name="name"
          className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
        />
        <CustomInput
          type="tel"
          placeholder="Enter your phone number"
          name="phonenumber"
          className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
          value={values.phonenumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phonenumber}
          touched={touched.phonenumber}
        />

        <CustomInput
          type="datetime-local"
          placeholder="Select date and time"
          name="dateTime"
          className="rounded-lg px-5 py-2 w-11/12 border border-[#374151]"
          value={values.dateTime}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.dateTime}
          touched={touched.dateTime}
        />
        <div className="">
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-xl w-11/12 bg-Blueviolet text-buttonText"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;
