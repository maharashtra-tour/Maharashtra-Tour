import mumbai01 from "@/public/assets/mumbai-darshan/mumbai01.jpg";
import mumbai02 from "@/public/assets/mumbai-darshan/mumbai02.jpg";
import mumbai03 from "@/public/assets/mumbai-darshan/mumbai03.jpg";
import Image from "next/image";
import FaqItem from "../components/Reusable/FaqItem";
import OurCabServices from "../components/Reusable/OurCabServices";
import CarsAvailable from "../components/Reusable/CarsAvailable";
import BookNowForm from "../components/Reusable/BookNowForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mumbai Darshan Cab | Maharashtra Tours",
  description:
    "Explore Mumbai's iconic landmarks with our Mumbai Darshan Cab services. Book now for a memorable city tour.",
  keywords: [
    "Mumbai Darshan",
    "Cab Service",
    "City Tour",
    "Mumbai landmarks",
    "Maharashtra Tours",
  ],
  alternates: {
    canonical: "https://maharashtratour.in/mumbai-darshan-cab",
  },
  openGraph: {
    type: "website",
    url: "https://maharashtratour.in/mumbai-darshan-cab",
    title: "Mumbai Darshan Cab | Maharashtra Tours",
    description:
      "Explore Mumbai's iconic landmarks with our Mumbai Darshan Cab services. Book now for a memorable city tour.",
    images: [
      {
        url: "https://maharashtratour.in/public/assets/mumbai-darshan/mumbai03.jpg",
        width: 800,
        height: 600,
        alt: "Mumbai Darshan Cover Image",
      },
    ],
  },
};

const faq = [
  {
    question: "What is Mumbai Darshan Cab Service?",
    answer:
      "Mumbai Darshan Cab Service provides an immersive journey through Mumbai's famed landmarks and attractions. These specially tailored cabs offer guided tours, showcasing iconic spots such as the Gateway of India, Marine Drive, and Elephanta Caves, ensuring a memorable exploration experience.",
  },
  {
    question: "How can I book a Mumbai Darshan Cab?",
    answer:
      "Booking a Mumbai Darshan Cab is hassle-free. You have the option to reserve your cab through their user-friendly official website or by reaching out to our dedicated customer service team or by filling an enquiry form.",
  },
  {
    question: "What kind of cars are available for rental services in Mumbai?",
    answer:
      "Mumbai's car rental services boast a diverse fleet catering to various preferences. Whether you seek compact cars, sedans, SUVs, or luxury vehicles, there's an option to suit every need and style.",
  },
  {
    question: "Can I hire a cab for a Mumbai city tour on an hourly basis?",
    answer:
      "Absolutely, our cab services in Mumbai offer flexible hourly rental options for city tours. This allows you to tailor your exploration duration, ensuring you can uncover Mumbai's charms at your own pace.",
  },
  {
    question: "Are the Mumbai city tour cabs accompanied by guides?",
    answer:
      "Yes, at certain places knowledgeable guides are available who enrich your experience with insights into Mumbai's history, culture, and attractions. Please note that guide charges are not included in the package",
  },
  {
    question:
      "What are the popular destinations covered in a Mumbai city tour?",
    answer:
      "Embark on a Mumbai city tour to discover its iconic landmarks, including the Gateway of India, Taj Mahal Palace Hotel, Marine Drive, Chhatrapati Shivaji Maharaj Terminus (Victoria Terminus), Haji Ali Dargah, Juhu Beach, Siddhivinayak Temple, and more, ensuring an enriching exploration of the city's treasures.",
  },
];

const sections = [
  {
    title: "Discover Mumbai at Your Own Pace with Mumbai Darshan Cab Services",
    content: [
      "Welcome to Mumbai, the city that never sleeps! Experience the bustling energy and vibrant culture of Mumbai with our Mumbai Darshan cab services. With our flexible cab booking options, you can explore Mumbai's iconic landmarks like the Gateway of India, Marine Drive, and Chowpatty Beach at your leisure. Say goodbye to fixed itineraries and hello to personalized exploration!",
      "When you choose our Mumbai Darshan cab service, you're not just getting a ride – you're getting a knowledgeable guide. Our drivers are locals who know the ins and outs of the city, ensuring you get the most out of your tour. Whether you're interested in history, culture, or cuisine, our drivers can offer valuable insights and recommendations to enhance your experience.",
      "At Maharashtra Tours, we understand that every traveler has different needs and preferences. That's why we offer a variety of cab options to suit your budget and group size. Whether you're traveling solo, with family, or in a group, we have the perfect cab for you. Plus, our fleet of well-maintained vehicles ensures a comfortable and safe journey throughout your Mumbai Darshan.",
      "Don't wait any longer to explore the wonders of Mumbai. Book your Mumbai Darshan cab with Maharashtra Tours today and embark on an unforgettable journey through the heart of the city!",
    ],
  },
  {
    title: "Unveiling Mumbai's Charm: A Mumbai Darshan Tour Package",
    content: [
      "Embark on a journey like never before with our exclusive Mumbai Darshan tour package. Designed to unveil the heart and soul of Mumbai in all its splendor, this tour promises to be an adventure from start to finish.",
      "Prepare to be captivated as you delve into the essence of this vibrant metropolis, with iconic landmarks awaiting your exploration. From the majestic Gateway of India to the mystical Elephanta Caves, every step of the journey offers something new and exciting.",
      "But the tour doesn't end there. Indulge your senses with the delectable flavors of Mumbai's street food at Chowpatty Beach, and lose yourself in the vibrant tapestry of the local markets at Colaba Causeway. Whether you're a history buff, a foodie, or a shopaholic, this tour has something for everyone.",
      "Book your Mumbai Darshan tour package today and let us show you the best that Mumbai has to offer!",
    ],
  },
  {
    title: "Navigate Mumbai's Wonders with Mumbai Darshan Cab Services",
    content: [
      "Discover the myriad wonders of Mumbai with our premium cab services. From the iconic Gateway of India to the bustling markets of Colaba, Mumbai beckons with an array of attractions waiting to be explored.",
      "Embark on our meticulously crafted Mumbai Darshan cab tour, designed to encompass the city's most iconic sights and hidden gems. Cruise along the picturesque Marine Drive, soak in the sun-kissed vibes at Juhu Beach, and marvel at the architectural marvel of the Bandra-Worli Sea Link.",
      "But that's not all – delve into the heart of Mumbai's bustling commerce with visits to the vibrant markets of Colaba and Crawford Market, where a world of shopping and delectable street food awaits.",
      "Whether you're a first-time visitor eager to immerse yourself in Mumbai's vibrant ambiance or a seasoned traveler seeking new adventures, our Mumbai Darshan cab service provides a seamless and hassle-free way to explore the city. Let us be your guide as you check off every must-visit spot on your itinerary, ensuring an enriching journey that lingers in your memories long after you've bid farewell to the City of Dreams.",
    ],
  },
];

const images = [
  { src: mumbai01, alt: "Local Cab Services" },
  { src: mumbai02, alt: "Hire For An Hour Services" },
  { src: mumbai03, alt: "Luxury Car Rental" },
];

const MumbaiDarshan = () => {
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
            FAQ for Mumbai Darshan Cab
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

export default MumbaiDarshan;
