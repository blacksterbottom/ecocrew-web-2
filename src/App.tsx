// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeenUsOn from './components/SeenUsOn';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Products from './components/Products';
// import Testimonials from './components/Testimonials';
import PlasticImpactCalculator from './components/PlasticImpactCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SeenUsOn />
      <HowItWorks />
      <Benefits />
      <Products />
      {/* <Testimonials /> */}
      <PlasticImpactCalculator/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
