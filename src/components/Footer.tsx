import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import logoImage from '../assets/logo-ecocrew-white.webp'; // Assuming tiktok icon is handled elsewhere or not needed here

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6 -ml-2">
              <img 
                src={logoImage} 
                alt="EcoCrew Logo" 
                className="h-16" // Adjust height as needed
              />
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing packaging with sustainable, reusable solutions that reduce waste and build a circular economy.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ecocrew.th/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/ecocrewth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-primary-400 transition-colors">Benefits</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary-400 transition-colors">Products</a></li>
              {/* <li><a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">Testimonials</a></li> */}
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {/* <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Sustainability Report</a></li> */}
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Partner Program</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest in sustainable packaging solutions.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            {/* <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our Privacy Policy.
            </p> */}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EcoCrew. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
