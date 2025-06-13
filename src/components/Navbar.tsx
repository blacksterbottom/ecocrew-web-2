import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo-ecocrew.webp';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src={logoImage} 
              alt="EcoCrew Logo" 
              className="h-14 md:h-14" // Adjust height as needed
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Benefits</a>
            <a href="#products" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Products</a>
            {/* <a href="#testimonials" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Testimonials</a> */}
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-500 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-500 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#products" className="text-gray-700 hover:text-primary-500 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-500 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="btn btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>Get Started</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
