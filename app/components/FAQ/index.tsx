"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import faqBg from "/public/assets/faq/swirl.png";

const faq = [
  {
    question: "How do I book a cab in Maharashtra Tours?",
    answer:
      "You can book a cab through our website by filling the Inquire form, or by calling our customer service line.",
  },
  {
    question: "What payment options are available for your cab services?",
    answer:
      "We accept various payment methods, including cash, UPI, and mobile wallets.",
  },
  {
    question: "Can I book a cab for a specific time in advance?",
    answer: "Yes, you can schedule a ride for a later time using our website.",
  },
  {
    question: "What types of cabs do you offer in Maharashtra Tours?",
    answer:
      "We provide a range of cabs, including economy, premium, and luxury vehicles, to meet your preferences.",
  },
  {
    question: "Are your drivers professional and experienced?",
    answer:
      "Absolutely, our drivers undergo rigorous training and background checks to ensure safe and professional service.",
  },
];

const FAQ = () => {
  return (
    <div id="faq-section" className="relative mx-auto max-w-7xl bg-Blueviolet py-12 lg:px-8 rounded-2xl my-16">
      <Image src={faqBg} alt="FAQ background" fill className="rounded-2xl object-cover" />
      <h3 className="relative text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="relative text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="relative w-full px-4 pt-16 space-y-4">
        {faq.map((item) => (
          <div key={item.question} className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-xl font-medium">
                    <span className="">{item.question}</span>
                    <div className="flex justify-end w-[10%]">
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
