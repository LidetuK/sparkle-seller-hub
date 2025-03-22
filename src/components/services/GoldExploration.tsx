
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const GoldExploration = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mt-20" ref={ref}>
      <div className={cn(
        "bg-gradient-to-r from-gem-teal/10 via-gem-yellow/10 to-gem-red/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gem-charcoal">Gold Exploration Services</h3>
            <div className="prose max-w-none">
              <p className="text-gem-charcoal/80 mb-4">
                Ethiopia's history of gold extraction spans over 2,500 years, with significant quantities of gold mined from placer deposits. Recognizing the potential for deeper, bedrock gold resources, the Geological Survey of Ethiopia (GSE) was established in 1968 under the Ministry of Mines.
              </p>
              <p className="text-gem-charcoal/80 mb-4">
                Since then, systematic exploration has uncovered economically promising gold deposits, primarily mesothermal or orogenic in nature. However, much of the exploration has been preliminary, leaving vast, prospective areas still under-explored.
              </p>
              <p className="text-gem-charcoal/80 mb-6">
                As an OnexOne member, we provide expertise in modern exploration techniques, geological assessment, and resource estimation to unlock the untapped gold potential of Ethiopia.
              </p>
              <div className="mt-6">
                <Button 
                  asChild 
                  className="bg-gem-teal hover:bg-gem-teal/90 text-white font-medium transition-colors duration-300"
                >
                  <a href="/about-us">Learn More About Us</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="h-full flex items-center justify-center p-8">
              <div className="relative max-w-md">
                <div className="absolute inset-0 bg-gem-yellow/20 rounded-full blur-3xl"></div>
                
                <img 
                  src="/lovable-uploads/2652bf48-73b3-4bc9-9728-13c97a944a75.png" 
                  alt="ONEX Mining Site" 
                  className="relative z-10 w-full h-auto rounded-full shadow-[0_0_30px_rgba(32,201,195,0.3)] animate-float"
                />
                
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gem-teal/30 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-gem-red/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldExploration;
