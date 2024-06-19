"use client";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { EnquirySchema } from "../EnquirySchema/EnquirySchema";

const initialValues = {
  name: "",
  contact: "",
  to: "",
  from: "",
  journeyDate: "",
  message: "",
};

const BottomNav = () => {
  let [isOpen, setIsOpen] = useState(false);

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
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_5ufknbv", "template_lge96x8", form.current, {
          publicKey: "KJALhrRh9VglLBJkn",
        })
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            // closeModal()
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      resetForm();
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="grid sm:hidden w-[93%] z-50 rounded-xl grid-cols-3 fixed bottom-0 left-0 right-0  text-white font-medium text-center mx-auto mb-3 text-sm p-0 h-14 bg-Blueviolet">
      <div className="flex flex-col justify-center gap-1 border-r items-center">
        <IoMdCall className="h-5 w-5" />
        <a href="tel:+918286112257">Call us</a>
      </div>
      <div
        className="flex flex-col justify-center gap-1 border-r items-center"
        onClick={openModal}
      >
        <BiMessageDetail className="h-5 w-5" />
        <p>Inquire Now</p>
      </div>
      <div className="flex flex-col justify-center gap-1 items-center">
        <FaWhatsapp className="h-5 w-5" />
        <a href="https://wa.me/8286112257?">Whatsapp</a>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold text-center">
                          Maharashtra Tours
                        </p>
                        <div className="flex justify-end">
                          <button type="button" onClick={closeModal}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-gray-900">
                                                    Register your account
                                                </h2> */}
                      </div>
                      <form
                        className="mt-2 space-y-6"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <div className="space-y-2 rounded-md shadow-sm">
                          <div>
                            <label htmlFor="name" className="sr-only">
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Full Name"
                            />
                            {errors.name && touched.name ? (
                              <p className="text-[#dc2626] text-xs italic">
                                {errors.name}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <label htmlFor="contact" className="sr-only">
                              contact
                            </label>
                            <input
                              id="contact"
                              name="contact"
                              type="tel"
                              autoComplete="tel"
                              value={values.contact}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Contact Number"
                            />
                            {errors.contact && touched.contact ? (
                              <p className="text-[#dc2626] text-xs italic">
                                {errors.contact}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <label htmlFor="from" className="sr-only">
                              From
                            </label>
                            <input
                              id="from"
                              name="from"
                              type="text"
                              value={values.from}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="From "
                            />
                            {errors.from && touched.from ? (
                              <p className="text-[#dc2626] text-xs italic">
                                {errors.from}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <label htmlFor="to" className="sr-only">
                              To
                            </label>
                            <input
                              id="to"
                              name="to"
                              type="text"
                              value={values.to}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="To"
                            />
                            {errors.to && touched.to ? (
                              <p className="text-[#dc2626] text-xs italic">
                                {errors.to}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <label htmlFor="date" className="sr-only">
                              Password
                            </label>
                            <input
                              id="date"
                              name="journeyDate"
                              type="text"
                              value={values.journeyDate}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              onFocus={(e) => (e.target.type = "date")}
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Journey Date"
                            />
                            {errors.journeyDate && touched.journeyDate ? (
                              <p className="text-[#dc2626] text-xs italic">
                                {errors.journeyDate}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <label htmlFor="message" className="sr-only">
                              Requirement
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={values.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Requirement"
                            />
                            {errors.message && touched.message ? (
                              <p className="text-[#dc2626] text-xs italic">
                                {errors.message}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            disabled={!form.current}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default BottomNav;
