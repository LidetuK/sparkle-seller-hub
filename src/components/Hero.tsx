
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop",
    title: "Exquisite Gemstones",
    subtitle: "Discover our collection of rare and precious stones",
    buttonText: "Explore Collection",
    buttonLink: "/products"
  },
  {
    image: "https://images.unsplash.com/photo-1586074744048-ac9aec84ee3a?q=80&w=1974&auto=format&fit=crop",
    title: "Handcrafted Excellence",
    subtitle: "Each piece carefully selected for its beauty and rarity",
    buttonText: "View Craftsmanship",
    buttonLink: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1780&auto=format&fit=crop",
    title: "Ethically Sourced",
    subtitle: "Sustainable practices from mine to market",
    buttonText: "Our Standards",
    buttonLink: "/about"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef<number | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    // Auto rotate slides
    slideTimerRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (slideTimerRef.current !== null) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 md:px-20">
            <div className={cn(
              "transform transition-all duration-700 delay-300",
              index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <span className="inline-block px-4 py-1 text-xs uppercase tracking-wider mb-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                ONEX Premium Selection
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                {slide.subtitle}
              </p>
              <a 
                href={slide.buttonLink} 
                className="inline-block px-8 py-4 bg-white text-gem-charcoal font-medium rounded-md hover:bg-white/90 transition-colors duration-300"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
