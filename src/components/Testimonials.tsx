import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Thompson",
    quote: "The ruby I purchased from ONEX exceeded all my expectations. The color is magnificent and the craftsmanship is impeccable. I'll definitely be returning for more stunning pieces.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    quote: "As a gemstone collector for over 15 years, I can confidently say that ONEX offers some of the finest specimens I've encountered. Their dedication to quality and authenticity is unmatched.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    quote: "I purchased an anniversary gift for my wife and the sapphire pendant is breathtaking. The customer service was exceptional, and they helped me select the perfect stone.",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    quote: "I was nervous about buying fine gemstones online, but ONEX made the process seamless. The emerald arrived exactly as described, and the certification gave me complete peace of mind.",
    rating: 4
  },
  {
    id: 5,
    name: "Alexandra Rivera",
    quote: "As a jewelry designer, I rely on high-quality gemstones for my creations. ONEX consistently provides exceptional stones that my clients adore. Their ethical sourcing practices align perfectly with my brand values.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(autoSlide);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = 100 / testimonials.length;
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="section-padding bg-gem-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gem-red rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gem-teal rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            What Our Clients Say
          </h2>
          <p className={cn(
            "text-lg text-white/70 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Discover the experiences of our valued customers with our premium gemstones
          </p>
        </div>

        <div className="relative overflow-hidden mx-auto max-w-5xl">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ width: `${testimonials.length * 100}%` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="w-full px-4 md:px-8"
                style={{ flex: `0 0 ${100 / testimonials.length}%` }}
              >
                <div className="bg-white text-gem-charcoal rounded-2xl p-6 md:p-12 shadow-xl h-full">
                  <div className="mb-6 flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Quote size={40} className="text-gem-red/20" />
                    </div>
                    <p className="text-lg md:text-xl italic">"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 mr-4 flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          fill={i < testimonial.rating ? "#f5b014" : "none"} 
                          className={i < testimonial.rating ? "text-gem-yellow" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 text-gem-charcoal p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 text-gem-charcoal p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-white w-8" 
                  : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/testimonials" className="bg-white text-gem-charcoal px-8 py-4 rounded-md font-medium hover:bg-white/90 transition-colors duration-300 inline-block">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
