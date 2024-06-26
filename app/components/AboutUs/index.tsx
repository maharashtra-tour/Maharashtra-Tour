import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "Cab Services.",
    imgSrc: "/assets/aboutUs/imgOne.svg",
    paragraph:
      "Reliable transportation solutions tailored to your needs, ensuring comfort, safety, and convenience for every journey, anytime, anywhere.",
  },
  {
    heading: "Local Rental.",
    imgSrc: "/assets/aboutUs/imgTwo.svg",
    paragraph:
      " Explore your city hassle-free with flexible and affordable local rental options, offering convenience and comfort at your fingertips",
  },
  {
    heading: "Outstation Cab.",
    imgSrc: "/assets/aboutUs/imgThree.svg",
    paragraph:
      "Venture beyond city limits with ease, enjoying hassle-free outstation cab services offering comfort, safety, and scenic travel experiences.",
  },
  {
    heading: "One-way Cab.",
    imgSrc: "/assets/aboutUs/imgOne.svg",
    paragraph:
      " Convenient one-way cab/taxi options for solo or group travel, ensuring economical fares and comfortable rides to your destination.",
  },
  {
    heading: "Round Trip Cab.",
    imgSrc: "/assets/aboutUs/imgTwo.svg",
    paragraph:
      "Enjoy stress-free round trip cab services, offering convenience, reliability, and comfort for your complete travel itinerary, with flexible scheduling options.",
  },
  {
    heading: "Airport Transfer.",
    imgSrc: "/assets/aboutUs/imgThree.svg",
    paragraph:
      "Seamless airport transfer services ensuring timely arrivals and departures, with professional chauffeurs and comfortable vehicles for a stress-free travel experience.",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-7xl px-4 py-12 my-8 lg:px-10 bg-lightgrey rounded-3xl relative">
        <h3 className="text-center text-blue text-lg tracking-widest">
          ABOUT US
        </h3>
        <h4 className="text-center text-4xl lg:text-65xl font-bold">
          What We Do.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-16 lg:gap-x-16">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="cursor-pointer  hover:shadow-2xl bg-white rounded-3xl mt-8 pt-10 pl-8 pb-4 pr-6 shadow-md group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-2">
                {item.paragraph}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
