import React from 'react';
import { Package, RefreshCw, Truck, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Package />,
      title: "Sustainable Packaging",
      description: "We provide durable, eco-friendly packaging designed for multiple uses. Each container is made from recycled materials and built to last."
    },
    {
      icon: <Users />,
      title: "Customer Use",
      description: "Your customers receive products in our reusable packaging, enjoying the premium unboxing experience while appreciating your sustainability commitment."
    },
    {
      icon: <RefreshCw />,
      title: "Easy Returns",
      description: "Customers return empty packaging through convenient drop-off points or collection services. Our QR code system makes returns simple and trackable."
    },
    {
      icon: <Truck />,
      title: "Cleaning & Redistribution",
      description: "We collect, sanitize, and inspect all returned packaging before redistributing to businesses, completing the circular economy loop."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How Our Reusable Packaging System Works</h2>
          <p className="section-subtitle">
            Our circular system eliminates single-use waste while providing a premium experience for your customers.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative z-10 card-hover">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6 mx-auto">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="text-xl font-bold mb-3">Ready to join the circular economy?</h3>
            <p className="text-gray-600 mb-4">Our team will help you transition to sustainable packaging with minimal disruption.</p>
            <a href="http://m.me/ecocrewth" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
