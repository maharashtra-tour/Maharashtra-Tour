"use client";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

const Banner = () => {
  const [phone, setPhone] = useState();

  const changeHandler = (e: any) => {
    setPhone(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      Host: process.env.NEXT_PUBLIC_SMTP_HOST,
      Username: process.env.NEXT_PUBLIC_USERNAME,
      Password: process.env.NEXT_PUBLIC_PASSWORD,
      Port: process.env.NEXT_PUBLIC_SMTP_PORT,
      To: "info.maharashtratour@gmail.com",
      From: "info.maharashtratour@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    };
    if ((window as any).Email) {
      (window as any).Email.send(config).then(() => {
        alert("mail sent successfully");
      });
    }
  };
  return (
    <>
      <Script src="https://smtpjs.com/v3/smtp.js" />
      <div id="home-section" className="bg-lightkblue mb-16 ">
        <div className="mx-auto max-w-7xl pt-36 sm:pb-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-y-5 space-x-5">
            <div className="col-span-6 flex flex-col justify-evenly">
              <div className="flex gap-2 sm:mt-10  mx-auto lg:mx-0">
                <Image
                  src="/assets/banner/check.svg"
                  alt="check-image"
                  width={20}
                  height={20}
                />
                <h3 className="text-kellygreen text-sm font-semibold text-center lg:text-start">
                  Navigate Mumbai in Comfort and Style!
                </h3>
              </div>
              <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
                Mumbai&apos;s Top Choice for Cab Service. Trusted for Reliable
                Journeys.
              </h1>
              <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
                Uncover Mumbai&apos;s Ultimate Destination for Cab Service.
                Trusted for Unmatched, Reliable Journeys.
              </h3>

              <form
                onSubmit={submitHandler}
                className="relative  text-white focus-within:text-white flex flex-row-reverse  input-shadow rounded-full pt-5 lg:pt-0"
              >
                <input
                  type="text"
                  name="phone"
                  value={phone || ""}
                  onChange={changeHandler}
                  className="py-6 lg:py-6 text-lg w-full text-black opacity-75 rounded-full pl-6 focus:outline-none focus:text-black"
                  placeholder="Your mobile number..."
                  autoComplete="off"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                  <button
                    type="submit"
                    className="p-4 lg:p-4 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <div className="flex items-center gap-2 justify-between pt-10 lg:pt-4">
                <div className="flex gap-2">
                  <Image
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallImage"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    Cab Service
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallImage"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    Reliable Transportation
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallImage"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    Trusted Journeys
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-6 flex justify-center">
              <Image
                src="/assets/banner/main.svg"
                alt="nothing"
                width={1000}
                height={805}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
