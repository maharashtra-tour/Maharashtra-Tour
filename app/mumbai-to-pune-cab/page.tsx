import pune01 from "@/public/assets/mumbai-pune/pune01.webp";
import pune02 from "@/public/assets/mumbai-pune/pune02.webp";
import pune03 from "@/public/assets/mumbai-pune/pune03.webp";
import Image from "next/image";
import FaqItem from "../components/Reusable/FaqItem";
import OurCabServices from "../components/Reusable/OurCabServices";
import CarsAvailable from "../components/Reusable/CarsAvailable";
import BookNowForm from "../components/Reusable/BookNowForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mumbai to Pune Cab Service | Maharashtra Tours",
  description:
    "Travel comfortably from Mumbai to Pune with our premium cab services. Book now for a seamless and enjoyable journey.",
  keywords: [
    "Mumbai to Pune",
    "Cab Service",
    "Pune Trip",
    "Travel to Pune",
    "Maharashtra Tours",
  ],
  alternates: {
    canonical: "https://maharashtratour.in/mumbai-to-pune-cab",
  },
  openGraph: {
    type: "website",
    url: "https://maharashtratour.in/mumbai-to-pune-cab",
    title: "Mumbai to Pune Cab Service | Maharashtra Tours",
    description:
      "Travel comfortably from Mumbai to Pune with our premium cab services. Book now for a seamless and enjoyable journey.",
    images: [
      {
        url: "https://maharashtratour.in/public/assets/mumbai-pune/pune01.jpg",
        width: 800,
        height: 600,
        alt: "Mumbai to Pune Cab Cover Image",
      },
    ],
  },
};

const faq = [
  {
    question: "What is the Mumbai to Pune Cab Service?",
    answer:
      "The Mumbai to Pune Cab Service offers a convenient and reliable way to travel between these two major cities. Our cabs provide a comfortable and efficient journey, ensuring you reach your destination smoothly.",
  },
  {
    question: "How can I book a cab from Mumbai to Pune?",
    answer:
      "Booking a cab from Mumbai to Pune is easy. You can reserve your cab through our website, contact our customer service, or fill out an enquiry form for prompt assistance.",
  },
  {
    question: "What types of cars are available for the Mumbai to Pune route?",
    answer:
      "We offer a range of cars to meet your needs, including compact cars, sedans, SUVs, and luxury vehicles. You can select the car that best suits your requirements and travel style.",
  },
  {
    question: "Can I book a one-way cab from Mumbai to Pune?",
    answer:
      "Yes, we provide both one-way and round-trip cab services from Mumbai to Pune. Choose the option that fits your travel plans and enjoy a hassle-free journey.",
  },
  {
    question: "Are the drivers experienced for the Mumbai to Pune route?",
    answer:
      "Our drivers are highly experienced and familiar with the Mumbai to Pune route. They ensure a safe and comfortable journey, offering insights and assistance as needed.",
  },
  {
    question: "How long does the journey from Mumbai to Pune take?",
    answer:
      "The trip from Mumbai to Pune typically takes around 3 to 4 hours, depending on traffic and road conditions. Our drivers strive to provide a timely and pleasant travel experience.",
  },
];

const sections = [
  {
    title: "Experience the Best Mumbai to Pune Cab Services",
    content: [
      "Travel from Mumbai to Pune in comfort and style with Maharashtra Tours' cab services. Our well-maintained vehicles ensure a smooth journey, allowing you to sit back and relax as you travel between these bustling cities.",
      "Our cab service offers flexibility and convenience, with options to suit solo travelers, families, and groups. Choose from a variety of vehicles to match your needs, ensuring a comfortable ride for everyone.",
      "Our professional drivers are knowledgeable about the Mumbai to Pune route, ensuring a safe and efficient journey. They provide excellent service, making your trip enjoyable and stress-free.",
      "Book your Mumbai to Pune cab with Maharashtra Tours today and experience the ease and comfort of our reliable services. We guarantee a pleasant and memorable trip every time.",
    ],
  },
  {
    title: "Why Choose Maharashtra Tours for Your Mumbai to Pune Journey?",
    content: [
      "Choosing Maharashtra Tours for your Mumbai to Pune trip ensures a top-notch travel experience. Our cabs are equipped with modern amenities to provide the utmost comfort during your journey.",
      "We offer transparent pricing and competitive rates, so you can travel with confidence knowing there are no hidden fees. Our goal is to provide a seamless and enjoyable travel experience from start to finish.",
      "Safety is our priority. Our drivers are trained professionals who adhere to all safety regulations, ensuring a secure journey. We also offer 24/7 customer support to assist with any questions or concerns.",
      "Experience the difference with Maharashtra Tours. Book your cab today and enjoy a smooth, comfortable, and reliable trip from Mumbai to Pune.",
    ],
  },
  {
    title: "Explore Pune with Maharashtra Tours' Mumbai to Pune Cab Services",
    content: [
      "Pune, known for its rich history and vibrant culture, is a must-visit destination. With Maharashtra Tours' Mumbai to Pune cab service, you can explore this dynamic city with ease and comfort.",
      "Our service is designed to provide a stress-free travel experience. Enjoy the scenic drive from Mumbai to Pune while we take care of all your travel needs. Our cabs are spacious and equipped with modern amenities for a relaxing journey.",
      "Upon reaching Pune, explore popular attractions like the Shaniwar Wada, Aga Khan Palace, and the bustling Koregaon Park. Our drivers can offer recommendations and assistance to make your visit memorable.",
      "Don't miss the opportunity to discover Pune. Book your cab with Maharashtra Tours and enjoy a smooth and enjoyable journey from Mumbai to Pune. We are committed to providing exceptional service and ensuring your trip is unforgettable.",
    ],
  },
];

const images = [
  { src: pune01, alt: "Sai Baba" },
  { src: pune02, alt: "Hire For An Hour Services" },
  { src: pune03, alt: "Luxury Car Rental" },
];

const MumbaiPune = () => {
  return (
    <>
      <div className="flex md:pt-48 pt-36 md:flex-row flex-col justify-center gap-4 md:gap-10 md:px-32 px-4 py-2 ">
        {/* Left Container */}
        <div className="md:w-[70%] space-y-4">
          {/* Image Container */}
          <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:h-[300px] gap-4 md:gap-8">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col flex-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover h-[300px] md:w-[300px] rounded-lg"
                />
              </div>
            ))}
          </div>
          {/* Section Container */}
          {sections.map((section, index) => (
            <div key={index} className="pb-6">
              <p className="text-3xl mb-6 text-center font-semibold">
                {section.title}
              </p>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-textSecondary mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <p className="text-3xl pt-8 text-center font-semibold">
            FAQ for Mumbai to Shirdi Cab
          </p>
          <div className="divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white">
            {faq.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* Right Container */}
        <div className=" md:w-[30%]">
          {/* Book cab now */}
          <BookNowForm />
          {/* Our Cab Services */}
          <OurCabServices />
          {/* Cars Available */}
          <CarsAvailable />
        </div>
      </div>
    </>
  );
};

export default MumbaiPune;
