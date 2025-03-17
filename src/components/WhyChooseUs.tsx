
import { useInView } from 'react-intersection-observer';
import { Diamond, BadgeCheck, TruckIcon, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

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

const certificates = [
  {
    src: "/lovable-uploads/f7185ed2-1154-4593-b878-9469c399aa38.png",
    alt: "Certificate Analysis - Tantalite Ore"
  },
  {
    src: "/lovable-uploads/ad05fd15-6d33-4ad8-ace9-8a24b9cb0340.png",
    alt: "Certificate Analysis - Tantalum"
  },
  {
    src: "/lovable-uploads/13339e07-a00c-4257-b4fb-e652bfacf1df.png",
    alt: "Certificate Analysis - Tantalite"
  },
  {
    src: "/lovable-uploads/0ed458cb-2f5b-472f-907f-016de64c3ca0.png",
    alt: "Certificate Analysis - Tantalum Sample"
  },
  {
    src: "/lovable-uploads/abbd4b51-a3e0-4476-8680-513287a9cb91.png",
    alt: "Certificate Analysis - Tantalum Sample 2" 
  },
  {
    src: "/lovable-uploads/e9d61231-66ec-42b7-a1c1-87e6921b7b16.png",
    alt: "Certificate Analysis - Lithium Ore"
  },
  {
    src: "/lovable-uploads/e7e6e788-4f89-442e-85b2-76aa1b75de32.png",
    alt: "Certificate Analysis - Lithium"
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
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/5 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Analysis Reports & Certifications</h3>
              <p className="text-gem-charcoal/70 mb-6">
                We work with accredited laboratories to analyze and verify the composition of our minerals and gemstones. Browse through our certified analysis reports, confirming the quality and value of our products.
              </p>
              <a href="tel:0920537777" className="gem-button-primary inline-block">
                Book a Call With us
              </a>
            </div>
            
            <div className="lg:w-3/5 p-4 md:p-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {certificates.map((certificate, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 pr-2">
                      <div className="relative h-[320px] sm:h-[350px] md:h-[380px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <img
                          src={certificate.src}
                          alt={certificate.alt}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <p className="font-medium text-sm">{certificate.alt}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-4">
                  <CarouselPrevious className="relative static left-0 right-0 translate-y-0 h-10 w-10 bg-white hover:bg-gray-100 border border-gray-200" />
                  <CarouselNext className="relative static left-0 right-0 translate-y-0 h-10 w-10 bg-white hover:bg-gray-100 border border-gray-200" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
