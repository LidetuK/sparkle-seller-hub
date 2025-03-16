
import { useInView } from 'react-intersection-observer';
import { Diamond, BadgeCheck, TruckIcon, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Diamond,
    title: "Premium Selection",
    description: "Every gemstone in our collection is handpicked for exceptional quality, color, and clarity."
  },
  {
    icon: BadgeCheck,
    title: "Authenticity Guaranteed",
    description: "All our gemstones come with certification and guarantee of authenticity and origin."
  },
  {
    icon: Shield,
    title: "Ethical Sourcing",
    description: "We're committed to responsible mining practices and ethical sourcing throughout our supply chain."
  },
  {
    icon: TruckIcon,
    title: "Global Market Expertise",
    description: "With deep industry knowledge, we provide competitive solutions and insights in the global gemstone trade."
  }
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gem-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gem-teal/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Why Choose ONEX
          </h2>
          <p className={cn(
            "text-lg text-gem-charcoal/70 max-w-2xl mx-auto transition-all duration-1000 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            We pride ourselves on offering the highest quality gemstones with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "gem-card group hover:-translate-y-2 transition-all duration-500 delay-[calc(100ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{"--index": index} as React.CSSProperties}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-gem-teal/10 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-gem-charcoal group-hover:text-gem-teal transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gem-charcoal/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-gem-teal/10 via-gem-yellow/10 to-gem-red/10 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Analysis Reports & Certifications</h3>
              <p className="text-gem-charcoal/70 mb-6">
                We work with accredited laboratories to analyze and verify the composition of our minerals and gemstones. On the right, you will find some of our certified analysis reports, confirming the quality and value of our products.
              </p>
              <a href="tel:0920537777" className="gem-button-primary inline-block">
                Book a Call With us
              </a>
            </div>
            
            <div className="md:w-1/2 p-4 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <img 
                    src="/lovable-uploads/photo_2025-02-06_16-31-37-removebg-preview.png" 
                    alt="Certificate 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <img 
                    src="/lovable-uploads/photo_2025-02-06_16-31-37__2_-removebg-preview.png" 
                    alt="Certificate 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
