import shirdi01 from "@/public/assets/mumbai-shirdi/shirdi.jpg";
import shirdi02 from "@/public/assets/mumbai-shirdi/shirdi02.jpg";
import shirdi03 from "@/public/assets/mumbai-shirdi/shirdi03.webp";
import Image from "next/image";
import FaqItem from "../components/Reusable/FaqItem";
import OurCabServices from "../components/Reusable/OurCabServices";
import CarsAvailable from "../components/Reusable/CarsAvailable";
import BookNowForm from "../components/Reusable/BookNowForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mumbai to Shirdi Cab Service | Maharashtra Tours",
  description:
    "Experience a comfortable and hassle-free journey from Mumbai to Shirdi with our cab services. Book now for a smooth and memorable trip.",
  keywords: [
    "Mumbai to Shirdi",
    "Cab Service",
    "Shirdi Trip",
    "Travel to Shirdi",
    "Maharashtra Tours",
  ],
  openGraph: {
    type: "website",
    url: "https://garvtravels.in/mumbai-to-shirdi-cab",
    title: "Mumbai to Shirdi Cab Service | Maharashtra Tours",
    description:
      "Experience a comfortable and hassle-free journey from Mumbai to Shirdi with our cab services. Book now for a smooth and memorable trip.",
    images: [
      {
        url: "https://garvtravels.in/public/assets/mumbai-shirdi/shirdi01.jpg",
        width: 800,
        height: 600,
        alt: "Mumbai to Shirdi Cab Cover Image",
      },
    ],
  },
};

const faq = [
  {
    question: "What is the Mumbai to Shirdi Cab Service?",
    answer:
      "The Mumbai to Shirdi Cab Service offers a convenient and comfortable travel option for those looking to visit Shirdi from Mumbai. Our cabs are equipped with all the necessary amenities to ensure a smooth journey.",
  },
  {
    question: "How can I book a cab from Mumbai to Shirdi?",
    answer:
      "Booking a cab from Mumbai to Shirdi is simple. You can make a reservation through our user-friendly website, contact our customer service team, or fill out an enquiry form for a quick response.",
  },
  {
    question:
      "What types of cars are available for the Mumbai to Shirdi route?",
    answer:
      "Our fleet includes a variety of cars to suit your needs, from compact vehicles and sedans to SUVs and luxury cars. You can choose the car that best fits your requirements for the journey.",
  },
  {
    question: "Can I book a one-way cab from Mumbai to Shirdi?",
    answer:
      "Yes, we offer both one-way and round-trip cab services from Mumbai to Shirdi. You can choose the option that best suits your travel plans.",
  },
  {
    question: "Are the drivers experienced for the Mumbai to Shirdi route?",
    answer:
      "Absolutely, our drivers are experienced and well-versed with the Mumbai to Shirdi route. They ensure a safe and pleasant journey, providing insights and assistance as needed.",
  },
  {
    question: "How long does the journey from Mumbai to Shirdi take?",
    answer:
      "The journey from Mumbai to Shirdi typically takes around 5 to 6 hours, depending on traffic conditions and the chosen route. Our drivers strive to ensure a timely and comfortable travel experience.",
  },
];

const sections = [
  {
    title: "Experience a Smooth Journey with Mumbai to Shirdi Cab Services",
    content: [
      "Traveling from Mumbai to Shirdi has never been easier with Maharashtra Tours' cab services. Enjoy a comfortable ride with our well-maintained vehicles, ensuring a pleasant journey to Shirdi.",
      "Our cab service offers flexibility and convenience, allowing you to choose the best time for your trip. Whether you're traveling alone, with family, or in a group, we have the perfect vehicle to suit your needs.",
      "Our drivers are experienced and knowledgeable, ensuring a safe journey and providing valuable insights about the route and local attractions. You can relax and enjoy the scenic drive while we take care of the rest.",
      "Book your Mumbai to Shirdi cab with Maharashtra Tours today and experience the comfort and reliability of our services. We guarantee a hassle-free and enjoyable trip to Shirdi.",
    ],
  },
  {
    title: "Why Choose Our Mumbai to Shirdi Cab Service?",
    content: [
      "Choosing Maharashtra Tours for your Mumbai to Shirdi journey ensures a superior travel experience. Our cabs are equipped with modern amenities to provide maximum comfort during your trip.",
      "We offer competitive pricing and transparent billing, so you can travel with peace of mind knowing there are no hidden charges. Our goal is to make your journey as seamless and enjoyable as possible.",
      "Safety is our top priority. Our drivers are trained professionals who adhere to all safety protocols, ensuring a secure travel experience. We also offer 24/7 customer support to assist you with any queries or concerns.",
      "Experience the difference with Maharashtra Tours. Book your cab today and embark on a memorable journey from Mumbai to Shirdi with our reliable and efficient cab services.",
    ],
  },
  {
    title:
      "Explore Shirdi with Maharashtra Tours' Mumbai to Shirdi Cab Services",
    content: [
      "Shirdi, the home of the revered Sai Baba, is a popular pilgrimage destination. With Maharashtra Tours' Mumbai to Shirdi cab service, you can explore this spiritual town with ease and comfort.",
      "Our service is designed to provide a stress-free travel experience. Enjoy the scenic route from Mumbai to Shirdi while we take care of all your travel needs. Our cabs are spacious and comfortable, ensuring a relaxing journey.",
      "Upon arrival in Shirdi, you can visit the famous Sai Baba Temple, explore the local markets, and experience the tranquil ambiance of this holy town. Our drivers can provide recommendations and assistance to enhance your visit.",
      "Don't miss out on the opportunity to visit Shirdi. Book your cab with Maharashtra Tours and enjoy a smooth and comfortable journey from Mumbai to Shirdi. We are committed to providing exceptional service and making your trip memorable.",
    ],
  },
];

const images = [
  { src: shirdi01, alt: "Sai Baba" },
  { src: shirdi02, alt: "Hire For An Hour Services" },
  { src: shirdi03, alt: "Luxury Car Rental" },
];

const MumbaiShirdi = () => {
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

export default MumbaiShirdi;
