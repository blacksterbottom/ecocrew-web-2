import React, { useState } from 'react';

import evrmLogo from '../assets/media-logo/evrm.webp';
import pearIsHungryLogo from '../assets/media-logo/pear_is_hungry.webp';
import kongGreenGreenLogo from '../assets/media-logo/Konggreengreen.webp';
import goGreenGirlLogo from '../assets/media-logo/gogreengirl.webp';
import gizLogo from '../assets/media-logo/giz.webp';
import smeThailandLogo from '../assets/media-logo/smeThailand.webp';
import tnnEarthLogo from '../assets/media-logo/tnnEarth.webp';

const SeenUsOn: React.FC = () => {
  const logos = [
    {
      name: "Environtman",
      logo: evrmLogo
    },
    {
      name: "Pear is hungry",
      logo: pearIsHungryLogo
    },
    {
      name: "Kong Green Green",
      logo: kongGreenGreenLogo
    },
    {
      name: "Go Green Girl",
      logo: goGreenGirlLogo
    },
    {
      name: "GIZ",
      logo: gizLogo
    },
    {
      name: "SME Thailand",
      logo: smeThailandLogo
    },
    {
      name: "TNN Earth",
      logo: tnnEarthLogo
    }
  ];

  // Duplicate logos for infinite scroll effect
  const infiniteLogos = [...logos, ...logos];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">As Seen On</p>
        </div>

        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex items-center gap-8 md:gap-12 opacity-80 ${isPaused ? '' : 'animate-scroll'}`}
            style={{ width: `${infiniteLogos.length * (120 + 32)}px` }} // (min-w-[120px] + gap-8) * number of items
          >
            {infiniteLogos.map((item, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <div className="flex items-center justify-center h-12 md:h-16 min-w-[100px] md:min-w-[120px] px-4">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="max-h-full max-w-full object-contain rounded-full" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Trusted by leading publications and industry experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeenUsOn;
