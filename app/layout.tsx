import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallNowButton from "./components/CallButton";
import BottomNav from "./components/BottomNav";

export const metadata = {
  title: "Maharashtra Tours | Book Now.",
  description:
    "Mumbai's Ultimate Destination for Cab Service. Trusted for Unmatched, Reliable Journeys",
  openGraph: {
    type: "website",
    url: "https://garvtravels.in/",
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
    <html lang="en">
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
