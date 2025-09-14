// src/app/layout.js (server component)
import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['700','800'] });

export const metadata = {
  title: 'ServiZephyr - WhatsApp Bot Solutions',
  description: 'Automate your restaurant on WhatsApp!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
