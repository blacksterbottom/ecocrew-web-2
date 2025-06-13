import React from 'react';
import { DollarSign, Leaf, BarChart, Heart, Award, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Impact",
      description: "Reduce packaging waste by up to 90% and lower your carbon footprint significantly with our reusable system."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Efficiency",
      description: "Save up to 40% on packaging costs over time as our durable containers replace single-use alternatives."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer Loyalty",
      description: "Build stronger relationships with environmentally conscious consumers who value sustainable practices."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data Insights",
      description: "Track packaging circulation, return rates, and environmental impact with our integrated analytics dashboard."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Brand Differentiation",
      description: "Stand out from competitors with premium, branded packaging that showcases your sustainability commitment."
    }
  ];

  return (
    <section id="benefits" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Benefits of Choosing EcoCrew</h2>
          <p className="section-subtitle">
            Our reusable packaging system delivers environmental, financial, and brand benefits that single-use packaging simply can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-100 card-hover">
              <div className="feature-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to make a positive impact?</h3>
              <p className="text-white/90 max-w-xl">
                Join hundreds of forward-thinking businesses already using EcoCrew's reusable packaging system.
              </p>
            </div>
            <a href="http://m.me/ecocrewth" target="_blank" className="btn bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
