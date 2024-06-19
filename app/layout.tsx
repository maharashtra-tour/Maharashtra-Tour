import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallNowButton from "./components/CallButton";
import BottomNav from "./components/BottomNav";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Maharashtra Tours | Book Now.",
  description:
    "Mumbai's Ultimate Destination for Cab Service. Trusted for Unmatched, Reliable Journeys",
  alternates: {
    canonical: "https://maharashtratour.in/",
  },
  openGraph: {
    type: "website",
    url: "https://maharashtratour.in/",
    title: "Maharashtra Tours | Mumbai's Top Choice for Cab Service.",
    description:
      "Explore Mumbai's iconic landmarks with our Mumbai Darshan Cab services. Book now for a memorable city tour.",
    images: [
      {
        url: "https://garvtravels.in/public/assets/mumbai-darshan/mumbai03.jpg",
        width: 800,
        height: 600,
        alt: "Mumbai Darshan Cover Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        <WhatsAppButton textMessage="Hello, I'm interested in using your cab service within Mumbai" />
        <CallNowButton />
        <BottomNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
