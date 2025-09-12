  // src/app/layout.js
  import Navbar from '../components/Navbar';
  import './globals.css';

  export const metadata = {
    title: 'ServiZephyr - WhatsApp Bot Solutions',
    description: 'Automate your restaurant on WhatsApp!',
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }