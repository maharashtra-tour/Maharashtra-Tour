import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallNowButton from './components/CallButton';
import BottomNav from './components/BottomNav';


export const metadata = {
  title: 'Garv Travels',
  description: 'Mumbai\'s Ultimate Destination for Cab Service. Trusted for Unmatched, Reliable Journeys'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
  )
}
