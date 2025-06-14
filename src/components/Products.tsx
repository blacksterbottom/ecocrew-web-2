import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import cupsImage from '../assets/artworks/cups.webp';
import bowlsImage from '../assets/artworks/bowls.webp';
import specialistImage from '../assets/artworks/specialist.webp';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');
  
  const categories = [
    { id: 'events', name: 'Events' },
    { id: 'food', name: 'Food & Beverage' },
  ];
  
  const events = {
    events: [
      {
        name: 'Reusable Cups',
        description: 'Durable, branded cups for festivals, concerts, and corporate events, reducing single-use plastic waste.',
        image: cupsImage,
        features: ['Stackable design', 'Food-grade materials', 'Dishwasher safe', 'BPA-free materials']
      },
      {
        name: 'Reusable Bowls',
        description: 'Stylish and sturdy reusable bowls for food vendors at events.',
        image: bowlsImage,
        features: ['Stackable design', 'Food-grade materials', 'Dishwasher safe', 'BPA-free materials']
      },
      {
        name: 'Ecocrew Event Specialist',
        description: 'On-site support and management for reusable systems at your event, ensuring smooth operation and maximum impact.',
        image: specialistImage,
        features: ['Collection system setup', 'Staff training', 'Impact reporting', 'Attendee engagement']
      }
    ],
    food: [
      {
        name: 'FoodCircle Containers',
        description: 'Insulated, leakproof containers for takeaway food and meal delivery services.',
        image: 'https://images.pexels.com/photos/5908232/pexels-photo-5908232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        features: ['Dishwasher safe', 'Microwave safe', 'Stackable', 'Airtight seal']
      },
      {
        name: 'BeverageLoop Cups',
        description: 'Reusable cups for coffee shops and beverage retailers with built-in tracking.',
        image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        features: ['Insulated', 'Leak-proof lid', 'Barcode tracking', 'Dishwasher safe']
      },
      {
        name: 'FreshPack Produce',
        description: 'Breathable mesh bags for fruits and vegetables that replace single-use plastic.',
        image: 'https://images.pexels.com/photos/4997810/pexels-photo-4997810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        features: ['Machine washable', 'Transparent design', 'Drawstring closure', 'Tare weight tag']
      }
    ],
  };

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Solutions for Events & Food Services</h2>
          <p className="section-subtitle">
            Explore our range of innovative, sustainable options for events and the food & beverage industry.
          </p>
        </div>

        {/* Category tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events[activeTab as keyof typeof events].map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
