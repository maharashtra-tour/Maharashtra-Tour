import lonavala01 from "@/public/assets/courses/lonavala.jpg";
import lonavala02 from "@/public/assets/mumbai-lonavala/lonavala02.webp";
import lonavala03 from "@/public/assets/mumbai-lonavala/lonavala03.jpg";
import Image from "next/image";
import FaqItem from "../components/Reusable/FaqItem";
import OurCabServices from "../components/Reusable/OurCabServices";
import CarsAvailable from "../components/Reusable/CarsAvailable";
import BookNowForm from "../components/Reusable/BookNowForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mumbai to Lonavala Cab Service | Garv Travels",
  description:
    "Enjoy a comfortable and scenic journey from Mumbai to Lonavala with our premium cab services. Book now for an unforgettable trip.",
  keywords: [
    "Mumbai to Lonavala",
    "Cab Service",
    "Lonavala Trip",
    "Travel to Lonavala",
    "Garv Travels",
  ],
  openGraph: {
    type: "website",
    url: "https://garvtravels.in/mumbai-to-lonavala-cab",
    title: "Mumbai to Lonavala Cab Service | Garv Travels",
    description:
      "Enjoy a comfortable and scenic journey from Mumbai to Lonavala with our premium cab services. Book now for an unforgettable trip.",
    images: [
      {
        url: "https://garvtravels.in/public/assets/mumbai-lonavala/lonavala01.jpg",
        width: 800,
        height: 600,
        alt: "Mumbai to Lonavala Cab Cover Image",
      },
    ],
  },
};

  const faq = [
    {
      question: "What is the Mumbai to Lonavala Cab Service?",
      answer:
        "The Mumbai to Lonavala Cab Service provides a convenient and comfortable way to travel between these two popular destinations. Our cabs are equipped with all the amenities to ensure a pleasant journey.",
    },
    {
      question: "How can I book a cab from Mumbai to Lonavala?",
      answer:
        "Booking a cab from Mumbai to Lonavala is easy. You can make a reservation through our user-friendly website, contact our customer service team, or fill out an enquiry form for prompt assistance.",
    },
    {
      question:
        "What types of cars are available for the Mumbai to Lonavala route?",
      answer:
        "We offer a variety of cars to suit your needs, including compact cars, sedans, SUVs, and luxury vehicles. Choose the car that best fits your preferences for the journey.",
    },
    {
      question: "Can I book a one-way cab from Mumbai to Lonavala?",
      answer:
        "Yes, we provide both one-way and round-trip cab services from Mumbai to Lonavala. Select the option that best suits your travel plans.",
    },
    {
      question: "Are the drivers experienced for the Mumbai to Lonavala route?",
      answer:
        "Our drivers are highly experienced and familiar with the Mumbai to Lonavala route. They ensure a safe and comfortable journey, offering insights and assistance as needed.",
    },
    {
      question: "How long does the journey from Mumbai to Lonavala take?",
      answer:
        "The trip from Mumbai to Lonavala typically takes around 2 to 3 hours, depending on traffic and road conditions. Our drivers strive to provide a timely and enjoyable travel experience.",
    },
  ];

const sections = [
  {
    title: "Experience a Scenic Journey with Mumbai to Lonavala Cab Services",
    content: [
      "Travel from Mumbai to Lonavala in comfort and style with Garv Travels' cab services. Our well-maintained vehicles ensure a smooth journey, allowing you to enjoy the scenic drive between these two beautiful destinations.",
      "Our cab service offers flexibility and convenience, with options to suit solo travelers, families, and groups. Choose from a variety of vehicles to match your needs, ensuring a comfortable ride for everyone.",
      "Our professional drivers are knowledgeable about the Mumbai to Lonavala route, ensuring a safe and efficient journey. They provide excellent service, making your trip enjoyable and stress-free.",
      "Book your Mumbai to Lonavala cab with Garv Travels today and experience the ease and comfort of our reliable services. We guarantee a pleasant and memorable trip every time.",
    ],
  },
  {
    title: "Why Choose Garv Travels for Your Mumbai to Lonavala Journey?",
    content: [
      "Choosing Garv Travels for your Mumbai to Lonavala trip ensures a top-notch travel experience. Our cabs are equipped with modern amenities to provide the utmost comfort during your journey.",
      "We offer transparent pricing and competitive rates, so you can travel with confidence knowing there are no hidden fees. Our goal is to provide a seamless and enjoyable travel experience from start to finish.",
      "Safety is our priority. Our drivers are trained professionals who adhere to all safety regulations, ensuring a secure journey. We also offer 24/7 customer support to assist with any questions or concerns.",
      "Experience the difference with Garv Travels. Book your cab today and enjoy a smooth, comfortable, and reliable trip from Mumbai to Lonavala.",
    ],
  },
  {
    title:
      "Explore Lonavala with Garv Travels' Mumbai to Lonavala Cab Services",
    content: [
      "Lonavala, known for its lush green hills and scenic beauty, is a popular getaway from Mumbai. With Garv Travels' Mumbai to Lonavala cab service, you can explore this charming hill station with ease and comfort.",
      "Our service is designed to provide a stress-free travel experience. Enjoy the picturesque drive from Mumbai to Lonavala while we take care of all your travel needs. Our cabs are spacious and equipped with modern amenities for a relaxing journey.",
      "Upon reaching Lonavala, you can visit popular attractions such as the Bhushi Dam, Tiger's Leap, and the Lonavala Lake. Our drivers can offer recommendations and assistance to make your visit memorable.",
      "Don't miss the opportunity to discover Lonavala. Book your cab with Garv Travels and enjoy a smooth and enjoyable journey from Mumbai to Lonavala. We are committed to providing exceptional service and ensuring your trip is unforgettable.",
    ],
  },
];

const images = [
  { src: lonavala01, alt: "Lonavala" },
  { src: lonavala02, alt: "Hire For An Hour Services" },
  { src: lonavala03, alt: "Luxury Car Rental" },
];

const MumbaiLonavala = () => {
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

export default MumbaiLonavala;
