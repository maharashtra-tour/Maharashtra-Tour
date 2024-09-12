"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  Star,
  Calendar,
  MapPin,
  Clock,
  Shield,
  Phone,
  BookOpen,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TourismService",
    name: "Mumbai Darshan Cabs",
    description:
      "Discover Mumbai's wonders with our premium Mumbai Darshan cab services. Enjoy personalized sightseeing tours, knowledgeable drivers, and comfortable rides.",
    areaServed: {
      "@type": "City",
      name: "Mumbai",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Mumbai Darshan Cabs",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          Mumbai Darshan Cabs | Explore Mumbai in Comfort | City Tours
        </title>
        <meta
          name="description"
          content="Discover Mumbai's wonders with our premium Mumbai Darshan cab services. Enjoy personalized sightseeing tours, knowledgeable drivers, and comfortable rides. Book now!"
        />
        <meta
          name="keywords"
          content="Mumbai Darshan, cab services, city tours, sightseeing, Mumbai attractions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Mumbai Darshan Cabs | Explore Mumbai in Comfort"
        />
        <meta
          property="og:description"
          content="Discover Mumbai's wonders with our premium Mumbai Darshan cab services. Enjoy personalized sightseeing tours and knowledgeable drivers."
        />
        <meta property="og:image" content="/mumbai-skyline.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mumbaidarshancabs.com" />
        <link rel="canonical" href="https://www.mumbaidarshancabs.com" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Mumbai Darshan Cabs Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-xl font-bold text-gray-800">
              Mumbai Darshan Cabs
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Attractions
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <ChevronDown size={24} className="text-gray-600" />
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-md">
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              Attractions
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main>
        <section
          className="relative h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/mumbai-skyline.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Mumbai's Wonders
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience the city's magic through personalized tours and expert
              guides
            </p>
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
              Book Now
            </button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Mumbai Darshan Cabs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Star size={48} className="mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                <p className="text-gray-600">
                  Knowledgeable drivers who bring Mumbai's history and culture
                  to life
                </p>
              </div>
              <div className="text-center">
                <Calendar size={48} className="mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">
                  Flexible Bookings
                </h3>
                <p className="text-gray-600">
                  Customizable itineraries to suit your preferences and schedule
                </p>
              </div>
              <div className="text-center">
                <Shield size={48} className="mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">
                  Safe & Comfortable
                </h3>
                <p className="text-gray-600">
                  Well-maintained vehicles with top-notch safety measures
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Popular Mumbai Attractions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Gateway of India",
                "Marine Drive",
                "Elephanta Caves",
                "Siddhivinayak Temple",
                "Chhatrapati Shivaji Terminus",
              ].map((attraction, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={`/attraction-${index + 1}.jpg`}
                    alt={attraction}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{attraction}</h3>
                    <p className="text-gray-600 mb-4">
                      Experience the magic of {attraction} with our expert
                      guides.
                    </p>
                    <a
                      href="#"
                      className="text-yellow-500 font-semibold hover:underline"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  comment:
                    "Excellent service! Our guide was knowledgeable and friendly. Highly recommend!",
                },
                {
                  name: "Sarah T.",
                  comment:
                    "The customizable tour was perfect for our family. We saw so much of Mumbai!",
                },
                {
                  name: "Raj M.",
                  comment:
                    "Professional drivers and comfortable cars. Made our Mumbai experience unforgettable.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mumbai Travel Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Best Time to Visit Mumbai",
                  content:
                    "The ideal time to visit Mumbai is from October to March when the weather is pleasant and perfect for sightseeing. Avoid the monsoon season (June to September) as heavy rains can disrupt travel plans.",
                  icon: Calendar,
                },
                {
                  title: "Must-Try Mumbai Street Food",
                  content:
                    "Don't miss out on Mumbai's famous street food! Try vada pav, pav bhaji, bhel puri, and sev puri. For a sweet treat, indulge in some mouthwatering jalebi or kulfi.",
                  icon: BookOpen,
                },
                {
                  title: "How Long Should I Plan for a Mumbai Tour?",
                  content:
                    "A 2-3 day tour is ideal to cover the main attractions of Mumbai. However, if you want to explore in depth and experience the local culture, consider staying for 4-5 days.",
                  icon: Clock,
                },
                {
                  title: "Is Mumbai Safe for Tourists?",
                  content:
                    "Mumbai is generally safe for tourists. However, as with any large city, it's advisable to take standard precautions. Stick to well-lit areas at night and keep your valuables secure.",
                  icon: Shield,
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <item.icon size={24} className="text-yellow-500 mr-2" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.content}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-yellow-500 font-semibold hover:underline"
                  >
                    Read more
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="#"
                className="text-yellow-500 font-semibold text-lg hover:underline"
              >
                View all travel tips
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Explore Mumbai?
            </h2>
            <p className="text-xl mb-8">
              Book your personalized Mumbai Darshan tour today and create
              unforgettable memories!
            </p>
            <button className="bg-white text-yellow-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Book Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Mumbai Darshan Cabs
              </h3>
              <p>Explore Mumbai in comfort and style</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="flex items-center mb-2">
                <MapPin size={18} className="mr-2" /> 123 Mumbai Street,
                Maharashtra, India
              </p>
              <p className="flex items-center mb-2">
                <Clock size={18} className="mr-2" /> Open 24/7
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2" /> +91 1234567890
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Mumbai Darshan Cabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
