
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award, UserCheck, Target, Sparkles } from 'lucide-react';

const AboutUs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" ref={ref1}>
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform",
              inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              About ONEX Gems
            </h1>
            <p className={cn(
              "text-lg text-gem-charcoal/70 max-w-3xl mx-auto transition-all duration-1000 delay-100 transform",
              inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              With over two decades of expertise in gemstone sourcing and craftsmanship, 
              we're dedicated to bringing you the finest gemstones with ethical practices and exceptional value.
            </p>
          </div>

          {/* Our Story Section */}
          <section className="mb-24" ref={ref2}>
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform",
              inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gem-charcoal/80">
                  <p>
                    Founded in 2001, ONEX Gems began as a family-owned business with a passion for 
                    exceptional gemstones. What started as a small operation has grown into a global 
                    enterprise, but our commitment to quality and personal service has never wavered.
                  </p>
                  <p>
                    Our founder, John Esku, traveled across continents to source the most exquisite 
                    gemstones directly from miners and local artisans. This direct relationship with 
                    sources allows us to ensure ethical practices and bring you gemstones of remarkable 
                    quality at competitive prices.
                  </p>
                  <p>
                    Today, we continue to build on that foundation, combining traditional knowledge with 
                    modern technology and design to create unique pieces that celebrate the natural 
                    beauty of our Earth's treasures.
                  </p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/9P_HkfWbO_E?si=yQWuZ65mwLwAaA9p" 
                  title="Our Story" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Objectives */}
          <section className="mb-24" ref={ref3}>
            <div className={cn(
              "text-center mb-12 transition-all duration-1000 transform",
              inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gem-charcoal/70 max-w-2xl mx-auto">
                We are guided by a clear mission, vision, and objectives that define our approach to business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className={cn(
                "gem-card transition-all duration-1000 delay-100 transform",
                inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <div className="bg-gem-red/10 p-4 inline-block rounded-full mb-6">
                  <UserCheck className="w-8 h-8 text-gem-red" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gem-charcoal/70">
                  To provide our customers with ethically sourced, high-quality gemstones and jewelry 
                  that celebrate the natural beauty of these treasures while ensuring fair practices 
                  throughout our supply chain. We aim to make the joy of owning authentic gemstones 
                  accessible to all gem enthusiasts.
                </p>
              </div>

              {/* Vision */}
              <div className={cn(
                "gem-card transition-all duration-1000 delay-200 transform",
                inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <div className="bg-gem-teal/10 p-4 inline-block rounded-full mb-6">
                  <Sparkles className="w-8 h-8 text-gem-teal" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gem-charcoal/70">
                  To be the most trusted name in gemstone sourcing and jewelry, known for our 
                  unwavering commitment to transparency, education, and exceptional craftsmanship. 
                  We envision a world where every gemstone transaction contributes positively to 
                  the communities from which these treasures originate.
                </p>
              </div>

              {/* Objectives */}
              <div className={cn(
                "gem-card transition-all duration-1000 delay-300 transform",
                inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <div className="bg-gem-yellow/10 p-4 inline-block rounded-full mb-6">
                  <Target className="w-8 h-8 text-gem-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Objectives</h3>
                <ul className="text-gem-charcoal/70 space-y-2">
                  <li>• Maintain the highest standards of ethical sourcing</li>
                  <li>• Provide comprehensive education on gemstone properties</li>
                  <li>• Offer exceptional value through direct sourcing</li>
                  <li>• Create unique, timeless designs that highlight each gem's natural beauty</li>
                  <li>• Support artisanal mining communities through fair trade practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Second Video and Certificates */}
          <section className="mb-24" ref={ref4}>
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform",
              inView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="order-2 lg:order-1 aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/l8g0z8yZ6FU?si=6ykYZPG-dh8ltDfD" 
                  title="Gemstone Sourcing Process" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
                <p className="mb-6 text-gem-charcoal/80">
                  We pride ourselves on adhering to the highest standards in the industry. 
                  Our certifications reflect our commitment to quality, ethical sourcing, 
                  and sustainable practices.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-gem-red/10 p-3 rounded-full">
                      <Award className="w-6 h-6 text-gem-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Responsible Jewellery Council</h3>
                      <p className="text-sm text-gem-charcoal/70">
                        Certified member since 2010, adhering to strict standards for ethical, 
                        social, and environmental practices throughout our supply chain.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-gem-teal/10 p-3 rounded-full">
                      <Award className="w-6 h-6 text-gem-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Kimberley Process Certification</h3>
                      <p className="text-sm text-gem-charcoal/70">
                        Full compliance with the Kimberley Process, ensuring all our diamonds are 
                        conflict-free and traded with legitimate sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
