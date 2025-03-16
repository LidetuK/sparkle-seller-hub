
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Award, 
  Diamond, 
  Globe, 
  Target, 
  Lightbulb,
  PlayCircle
} from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const AboutUs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: refStory, inView: inViewStory } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refMission, inView: inViewMission } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refCertificates, inView: inViewCertificates } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About ONEX</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-2xl mx-auto">
              Our journey to becoming a leading name in premium gemstones and fine jewelry
            </p>
          </div>
          
          {/* Hero Video Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="rounded-xl overflow-hidden shadow-lg relative aspect-video bg-black">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full h-full bg-gradient-to-r from-gem-emerald/20 to-gem-topaz/20 flex items-center justify-center cursor-pointer group">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?q=80&w=2070&auto=format&fit=crop" 
                      alt="Our Workshop" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="relative z-10 text-white text-center p-6">
                      <PlayCircle className="mx-auto mb-2 w-16 h-16 text-white/90 group-hover:text-white transition-colors" />
                      <h3 className="font-semibold text-xl">Our Craftsmanship</h3>
                      <p className="text-sm text-white/80">Watch our artisans at work</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="ONEX Craftsmanship" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg relative aspect-video bg-black">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full h-full bg-gradient-to-r from-gem-sapphire/20 to-gem-ruby/20 flex items-center justify-center cursor-pointer group">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1619072068601-8e0e3a3ab984?q=80&w=2070&auto=format&fit=crop" 
                      alt="Our Mines" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="relative z-10 text-white text-center p-6">
                      <PlayCircle className="mx-auto mb-2 w-16 h-16 text-white/90 group-hover:text-white transition-colors" />
                      <h3 className="font-semibold text-xl">Gemstone Journey</h3>
                      <p className="text-sm text-white/80">From mine to masterpiece</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="ONEX Gem Journey" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Our Story Section */}
          <div 
            ref={refStory}
            className={cn(
              "mb-20 transition-all duration-1000 transform",
              inViewStory ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gem-charcoal/70 mb-8">
                Founded in 1998, ONEX began as a small family business with a passion for rare and beautiful gemstones. 
                What started as a modest workshop has grown into a globally recognized brand, but our commitment to quality 
                and craftsmanship remains unchanged.
              </p>
              <p className="text-lg text-gem-charcoal/70">
                Today, we source the finest gemstones from ethical mines around the world, working directly with local 
                communities to ensure fair practices. Each piece in our collection tells a story of tradition, 
                expertise, and artistic vision that has been cultivated over decades.
              </p>
            </div>
          </div>
          
          {/* Mission, Vision, Objective */}
          <div 
            ref={refMission}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 transform",
              inViewMission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gem-emerald/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="text-gem-emerald w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Our Mission</h3>
              <p className="text-gem-charcoal/70 text-center">
                To connect people with the extraordinary beauty of natural gemstones through exceptional 
                craftsmanship and ethical sourcing, creating pieces that become treasured heirlooms.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gem-sapphire/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="text-gem-sapphire w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Our Vision</h3>
              <p className="text-gem-charcoal/70 text-center">
                To be the most trusted name in fine gemstones and jewelry worldwide, setting the standard 
                for quality, innovation, and responsible business practices in the industry.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gem-ruby/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="text-gem-ruby w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Our Objective</h3>
              <p className="text-gem-charcoal/70 text-center">
                To continually push the boundaries of gemstone artistry while maintaining sustainable 
                practices, supporting mining communities, and educating consumers about the true value of authentic gems.
              </p>
            </div>
          </div>
          
          {/* Certificates Section */}
          <div 
            ref={refCertificates}
            className={cn(
              "mb-20 transition-all duration-1000 transform",
              inViewCertificates ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Certifications</h2>
              <p className="text-lg text-gem-charcoal/70 max-w-3xl mx-auto">
                Our commitment to quality and ethical standards is recognized by leading industry organizations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gem-gold/10 rounded-full flex items-center justify-center mr-6">
                    <Award className="text-gem-gold w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Responsible Jewelry Council</h3>
                    <p className="text-gem-charcoal/60 text-sm">Certified Member Since 2010</p>
                  </div>
                </div>
                <p className="text-gem-charcoal/70 mb-4">
                  This certification confirms our adherence to the highest ethical, social, 
                  and environmental standards throughout our supply chain.
                </p>
                <ul className="text-gem-charcoal/70 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gem-gold rounded-full mr-2"></span>
                    <span>Ethical business practices</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gem-gold rounded-full mr-2"></span>
                    <span>Supply chain transparency</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gem-gold rounded-full mr-2"></span>
                    <span>Environmental responsibility</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gem-emerald/10 rounded-full flex items-center justify-center mr-6">
                    <Diamond className="text-gem-emerald w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Gemological Institute Certification</h3>
                    <p className="text-gem-charcoal/60 text-sm">Accredited Partner</p>
                  </div>
                </div>
                <p className="text-gem-charcoal/70 mb-4">
                  Every gemstone we sell is accompanied by a certificate from respected gemological 
                  laboratories, guaranteeing its authenticity and quality.
                </p>
                <ul className="text-gem-charcoal/70 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gem-emerald rounded-full mr-2"></span>
                    <span>Verified origin documentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gem-emerald rounded-full mr-2"></span>
                    <span>Accurate grading and valuation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gem-emerald rounded-full mr-2"></span>
                    <span>Conflict-free sourcing guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
