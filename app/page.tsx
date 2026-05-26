'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/about';
import Cream from './components/cream';
import Contact from './components/contact';

export default function HomePage() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Cream />
      <Contact />
      <Footer />
    </div>

    
  );

}