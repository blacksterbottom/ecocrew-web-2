import React from 'react';
import { ArrowRight, Package2, Recycle, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
              <Leaf size={16} className="mr-2" />
              <span>Sustainable Packaging Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Revolutionize Your <span className="text-primary-500">Packaging</span> with Reusable Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Join the circular economy with EcoCrew's innovative reusable packaging system. Reduce waste, save costs, and build a sustainable brand your customers will love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                Learn How It Works
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-2xl md:text-3xl text-primary-600">70%</div>
                <div className="text-sm text-gray-600">Waste Reduction</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl md:text-3xl text-primary-600 ">40%</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl md:text-3xl text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img 
                src="src/assets/artworks/ecocrew.jpg" 
                alt="EcoCrew reusable packaging solutions" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-lg animate-float">
                <Recycle className="h-6 w-6 text-primary-500" />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg animate-float-slow">
                <Package2 className="h-6 w-6 text-secondary-500" />
              </div>
            </div>
            
            {/* Testimonial bubble */}
            <div className="absolute -bottom-8 right-4 bg-white p-3 rounded-xl shadow-lg max-w-xs animate-float">
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-sm">JM</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600">"EcoCrew helped us reduce packaging waste by 90%"</p>
                  <p className="text-xs font-medium text-gray-900 mt-1">Jam - CEO of Ecocrew</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
