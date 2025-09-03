import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PriceAnchor from './components/PriceAnchor';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <PriceAnchor />
      <Bonuses />
      <Testimonials />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;