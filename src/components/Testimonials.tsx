import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "EcoCrew transformed our packaging approach. 90% waste reduction and happier customers!",
      author: "Sarah Johnson",
      position: "Sustainability Director",
      company: "Organic Essentials",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      rating: 5
    },
    {
      quote: "Seamless implementation and perfect integration with our existing operations.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "GreenLife Foods",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      rating: 5
    },
    {
      quote: "Return rates exceeded expectations. 30% increase in repeat purchases!",
      author: "Emma Rodriguez",
      position: "Founder & CEO",
      company: "Conscious Clothing Co.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      rating: 5
    },
    {
      quote: "Custom packaging elevated our brand while meeting sustainability goals.",
      author: "David Park",
      position: "Marketing Director",
      company: "Luxe Sustainable",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      rating: 5
    },
    {
      quote: "Outstanding support team and measurable environmental impact results.",
      author: "Lisa Wang",
      position: "CEO",
      company: "EcoTech Solutions",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      rating: 5
    },
    {
      quote: "Cost savings were immediate and customer feedback has been incredible.",
      author: "James Miller",
      position: "COO",
      company: "Green Retail Co.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      rating: 4
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [...testimonials, ...testimonials];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-18">
          <h2 className="section-title">What Our Partners Say</h2>
          <p className="section-subtitle">
            Hear from businesses that have transformed their packaging approach with EcoCrew.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className={`flex gap-6 ${isPaused ? '' : 'animate-scroll'}`}
            style={{
              width: `${infiniteTestimonials.length * 320}px`,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mb-4"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.author}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.position}</p>
                    <p className="text-primary-600 font-medium text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-800 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
