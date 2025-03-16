
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Diamond, Heart, Droplet, Shield, Sun, Zap, Bolt, Globe } from "lucide-react";


interface GemstoneInfo {
  name: string;
  icon: React.ReactNode;
  color: string;
  hardness: string;
  origin: string;
  description: string;
  properties: string[];
  image: string;
}

const gemstones: GemstoneInfo[] = [
  {
    name: "Aquamarine",
    icon: <Droplet className="w-6 h-6" />, 
    color: "Light blue to bluish-green",
    hardness: "7.5-8 (Mohs scale)",
    origin: "Shakiso, Oromia, Ethiopia",
    description: "Aquamarine is a variety of beryl known for its stunning blue to greenish-blue hues, reminiscent of seawater. It has been cherished for centuries as a symbol of tranquility and courage.",
    properties: [
      "Symbol of serenity and courage",
      "Associated with the throat chakra",
      "Believed to promote clear communication and calmness"
    ],
    image: "/lovable-uploads/AQUAMARINE.jpg"
  },
  {
    name: "Opal",
    icon: <Sun className="w-6 h-6" />,
    color: "Multicolored with play of colors",
    hardness: "5.5-6.5 (Mohs scale)",
    origin: "Wollo (Welo) Zone, Amhara Region, Ethiopia",
    description: "Ethiopian opals are admired for their remarkable play-of-color, displaying an array of spectral hues. These gems are believed to inspire creativity and emotional expression.",
    properties: [
      "Symbol of inspiration and spontaneity",
      "Associated with emotional balance",
      "Believed to amplify imagination and creativity"
    ],
    image: "/lovable-uploads/OPAL.jpg"
  },
  {
    name: "Emerald",
    icon: <Shield className="w-6 h-6" />,
    color: "Green",
    hardness: "7.5-8 (Mohs scale)",
    origin: "Sebeta, Oromia, Ethiopia",
    description: "Emeralds from Ethiopia exhibit a deep green hue with remarkable clarity. These gemstones symbolize growth, wisdom, and renewal, making them highly valued.",
    properties: [
      "Symbol of wisdom and renewal",
      "Associated with the heart chakra",
      "Believed to promote love and intelligence"
    ],
    image: "/lovable-uploads/EMERALD.jpg"
  },
  {
    name: "Sapphire",
    icon: <Diamond className="w-6 h-6" />,
    color: "Blue, but also found in other colors",
    hardness: "9 (Mohs scale)",
    origin: "Tigray, Ethiopia",
    description: "Ethiopian sapphires are admired for their deep blue tones and durability. Traditionally, they are associated with wisdom and spiritual enlightenment.",
    properties: [
      "Symbol of wisdom and clarity",
      "Associated with mental focus",
      "Believed to protect against negative energies"
    ],
    image: "/lovable-uploads/SAPHIER.jpg"
  },
  {
    name: "Ruby",
    icon: <Heart className="w-6 h-6" />,
    color: "Red",
    hardness: "9 (Mohs scale)",
    origin: "Guji Zone, Oromia, Ethiopia",
    description: "Ethiopian rubies are prized for their intense red color and brilliance. They symbolize passion, vitality, and protection, often associated with strong emotions.",
    properties: [
      "Symbol of passion and strength",
      "Associated with the root chakra",
      "Believed to enhance energy and confidence"
    ],
    image: "/lovable-uploads/RUBY.jpg"
  },
  {
    name: "Tourmaline",
    icon: <Zap className="w-6 h-6" />,
    color: "Multicolored, including green, pink, and black",
    hardness: "7-7.5 (Mohs scale)",
    origin: "Kenticha, Oromia, Ethiopia",
    description: "Tourmaline is known for its vibrant colors and unique ability to generate an electrical charge. It is believed to promote grounding and energy balance.",
    properties: [
      "Symbol of protection and grounding",
      "Associated with energy purification",
      "Believed to enhance vitality and emotional stability"
    ],
    image: "/lovable-uploads/TOURMALINE BLUE.jpg"
  },
  {
    name: "Lithium Ore",
    icon: <Bolt className="w-6 h-6" />,
    color: "Grayish-white to pink",
    hardness: "2.5-3.5 (Mohs scale)",
    origin: "Afar Region, Ethiopia",
    description: "Lithium ore is an essential mineral used in modern battery production. It is a valuable resource for the future of clean energy and technological advancements.",
    properties: [
      "Essential for energy storage",
      "Used in battery and technology applications",
      "Believed to promote stability and balance"
    ],
    image: "/lovable-uploads/LITHIUM ORE.jpg"
  },
  {
    name: "Tantalum",
    icon: <Globe className="w-6 h-6" />,
    color: "Steel-gray",
    hardness: "6-6.5 (Mohs scale)",
    origin: "Southern Nations, Ethiopia",
    description: "Tantalum is a rare, highly corrosion-resistant metal used in electronics and aerospace applications. It plays a crucial role in modern technology.",
    properties: [
      "Highly corrosion-resistant",
      "Used in advanced electronics and aerospace",
      "Believed to enhance durability and conductivity"
    ],
    image: "/lovable-uploads/TANTHULUM.jpg"
  }
];

const GemstoneGuide = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" ref={ref}>
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Gemstone Guide
            </h1>
            <p className={cn(
              "text-lg text-gem-charcoal/70 max-w-2xl mx-auto transition-all duration-1000 delay-100 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Learn about the characteristics, origins, and significance of various gemstones
            </p>
          </div>
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-lg text-gem-charcoal/80 mb-4">
              Gemstones have captivated humanity since ancient times, valued not only for their beauty but also for their perceived 
              mystical and healing properties. Each gemstone is unique, formed through extraordinary geological processes over 
              millions of years.
            </p>
            <p className="text-lg text-gem-charcoal/80">
              In this guide, we explore some of the world's most prized gemstones, detailing their characteristics, origins, 
              and the qualities that make them special. Whether you're a collector, looking for the perfect jewelry piece, 
              or simply fascinated by these natural wonders, this guide provides valuable insights into the world of gemstones.
            </p>
          </div>
          
          {/* Gemstone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {gemstones.map((gemstone, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
                delay: 100 * index,
              });
              
              return (
                <div 
                  key={gemstone.name}
                  ref={ref}
                  className={cn(
                    "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    "transition-all duration-700 delay-[calc(100ms*var(--index))]"
                  )}
                  style={{"--index": index} as React.CSSProperties}
                >
                  <div className="flex h-full">
                    <div className="w-1/3 relative overflow-hidden">
                      <img 
                        src={gemstone.image} 
                        alt={gemstone.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gem-charcoal/10 rounded-full flex items-center justify-center">
                          {gemstone.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{gemstone.name}</h3>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="text-sm font-semibold text-gem-charcoal">Color:</span>
                          <span className="text-sm text-gem-charcoal/70 ml-2">{gemstone.color}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gem-charcoal">Hardness:</span>
                          <span className="text-sm text-gem-charcoal/70 ml-2">{gemstone.hardness}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gem-charcoal">Primary Sources:</span>
                          <span className="text-sm text-gem-charcoal/70 ml-2">{gemstone.origin}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gem-charcoal/70 mb-4 line-clamp-3">
                        {gemstone.description}
                      </p>
                      
                      <div>
                        <span className="text-sm font-semibold text-gem-charcoal">Properties:</span>
                        <ul className="mt-2 space-y-1">
                          {gemstone.properties.map((property, i) => (
                            <li key={i} className="text-xs text-gem-charcoal/70 flex items-start">
                              <span className="w-1.5 h-1.5 bg-gem-charcoal/40 rounded-full mt-1.5 mr-2"></span>
                              {property}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Care Guide */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Gemstone Care Guide</h2>
            
            <div className="space-y-4">
              <p className="text-gem-charcoal/80">
                Different gemstones require different care due to their varying hardness and physical properties. 
                Here are some general guidelines to keep your gemstones looking their best:
              </p>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Storage</h3>
                <p className="text-gem-charcoal/70">
                  Store your gemstone jewelry separately to prevent scratching. Harder stones like diamonds 
                  can scratch softer ones like opals or pearls. Consider using a jewelry box with compartments or 
                  soft pouches for individual pieces.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Cleaning</h3>
                <p className="text-gem-charcoal/70">
                  Most gemstones can be cleaned with warm water, mild soap, and a soft brush. Avoid harsh chemicals 
                  and ultrasonic cleaners for sensitive stones like emeralds, opals, and pearls. Always rinse thoroughly 
                  and dry with a soft cloth.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Wearing</h3>
                <p className="text-gem-charcoal/70">
                  Remove jewelry before activities that may expose gemstones to harsh conditions, such as swimming 
                  (chlorine can damage some stones), gardening, or using household cleaners. Apply cosmetics, perfumes, 
                  and hairsprays before putting on your jewelry.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Regular Maintenance</h3>
                <p className="text-gem-charcoal/70">
                  Inspect your gemstone jewelry regularly for loose settings or signs of damage. Have your precious 
                  gemstone jewelry checked by a professional jeweler annually to ensure settings are secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GemstoneGuide;
