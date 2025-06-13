import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    industry: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        loading: false,
        submitted: true
      }));
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Ready to Transform Your Packaging?</h2>
          <p className="section-subtitle">
            Get in touch with our team to discuss how EcoCrew can create a custom reusable packaging solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 order-2 lg:order-1">
            {formState.submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been received. One of our sustainability consultants will contact you within 24 hours to discuss your packaging needs.
                </p>
                <button 
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false, name: '', email: '', company: '', message: '', industry: '' }))}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formState.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="" disabled>Select your industry</option>
                      <option value="retail">Retail</option>
                      <option value="food">Food & Beverage</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your packaging needs..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I agree to receive communications from EcoCrew about my inquiry.
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={formState.loading}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {formState.loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary-200" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:hello@ecocrew.com" className="text-white hover:text-primary-100 transition-colors">ecocrew.team@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary-200" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+18005551234" className="text-white hover:text-primary-100 transition-colors">+66 91-796-5362</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary-200" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Visit Us</p>
                    <address className="not-italic text-white">
                      11/75 Sukhumvit 29 Surasak<br />
                      Sriracha, Chonburi 20110<br />
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">How quickly can we implement your system?</h4>
                  <p className="text-gray-600 text-sm mt-1">Most events can implement our basic system within 1 week.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">What's the minimum order quantity?</h4>
                  <p className="text-gray-600 text-sm mt-1">We offer flexible solutions starting from 100 reusable containers.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">How do you handle cleaning and sanitization?</h4>
                  <p className="text-gray-600 text-sm mt-1">Our facilities use eco-friendly, industrial-grade cleaning processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
