import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Travel Unbounded | Experiential Travel Experts',
  description: 'Discover unforgettable journeys with Travel Unbounded. Explore India and international destinations with personally curated travel experiences.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
