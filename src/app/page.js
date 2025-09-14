// src/app/(site)/page.js
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import AILoyalty from '@/components/AILoyalty';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <AILoyalty />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}