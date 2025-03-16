
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Diamond, Shield, Sun, Droplet, Zap, Heart } from 'lucide-react';

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
    name: "Diamond",
    icon: <Diamond className="w-6 h-6" />,
    color: "Colorless, Yellow, Brown, Blue, Green, Pink",
    hardness: "10 (Mohs scale)",
    origin: "South Africa, Russia, Botswana, Canada",
    description: "Diamonds are renowned for their exceptional hardness and brilliance. Formed under extreme pressure deep within the Earth's mantle, they are the hardest natural material known.",
    properties: [
      "Symbol of enduring love and commitment",
      "Associated with clarity and strength",
      "Believed to bring balance and abundance"
    ],
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1933&auto=format&fit=crop"
  },
  {
    name: "Ruby",
    icon: <Heart className="w-6 h-6" />,
    color: "Red",
    hardness: "9 (Mohs scale)",
    origin: "Myanmar, Thailand, Sri Lanka, Madagascar",
    description: "Rubies are precious gemstones known for their vibrant red color, which comes from the presence of chromium. The most valuable rubies are a deep 'pigeon blood' red with a slight hint of blue.",
    properties: [
      "Symbol of passion, protection, and prosperity",
      "Associated with the heart and blood",
      "Believed to stimulate energy and vitality"
    ],
    image: "https://images.unsplash.com/photo-1517613367530-d0a7375a0b7a?q=80&w=2066&auto=format&fit=crop"
  },
  {
    name: "Sapphire",
    icon: <Droplet className="w-6 h-6" />,
    color: "Blue, but also found in nearly all colors except red",
    hardness: "9 (Mohs scale)",
    origin: "Sri Lanka, Madagascar, Australia, Thailand",
    description: "While most famous for their deep blue color, sapphires naturally occur in a rainbow of hues, including pink, yellow, green, and colorless. They are composed of the mineral corundum.",
    properties: [
      "Symbol of wisdom, loyalty, and nobility",
      "Associated with focus and mental clarity",
      "Traditionally believed to protect against evil"
    ],
    image: "https://images.unsplash.com/photo-1546567474-0589686aabf8?q=80&w=2066&auto=format&fit=crop"
  },
  {
    name: "Emerald",
    icon: <Shield className="w-6 h-6" />,
    color: "Green",
    hardness: "7.5-8 (Mohs scale)",
    origin: "Colombia, Zambia, Brazil, Zimbabwe",
    description: "Emeralds are beryl crystals colored green by trace amounts of chromium and vanadium. Their rich green color has been treasured for thousands of years, with some of the finest specimens coming from Colombia.",
    properties: [
      "Symbol of rebirth, wisdom, and growth",
      "Associated with the heart chakra",
      "Believed to enhance memory and intelligence"
    ],
    image: "https://images.unsplash.com/photo-1551891887-b35761959110?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Amethyst",
    icon: <Zap className="w-6 h-6" />,
    color: "Purple to Violet",
    hardness: "7 (Mohs scale)",
    origin: "Brazil, Uruguay, Zambia, Russia",
    description: "Amethyst is a variety of quartz characterized by its distinct purple color, which ranges from pale lilac to deep purple. The color comes from iron impurities and exposure to natural radiation.",
    properties: [
      "Symbol of clarity, sobriety, and calmness",
      "Associated with the crown chakra",
      "Believed to enhance intuition and spiritual awareness"
    ],
    image: "https://images.unsplash.com/photo-1589385953111-af07cbba3c70?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Opal",
    icon: <Sun className="w-6 h-6" />,
    color: "Multicolored with play of colors",
    hardness: "5.5-6.5 (Mohs scale)",
    origin: "Australia, Ethiopia, Mexico, Brazil",
    description: "Opals are unique among gemstones for their ability to diffract light, producing a spectacular play of colors. Each opal is one-of-a-kind, with patterns that are never exactly duplicated.",
    properties: [
      "Symbol of hope, purity, and truth",
      "Associated with creativity and spontaneity",
      "Believed to enhance cosmic consciousness"
    ],
    image: "https://images.unsplash.com/photo-1563699182-58375278da5d?q=80&w=2066&auto=format&fit=crop"
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
