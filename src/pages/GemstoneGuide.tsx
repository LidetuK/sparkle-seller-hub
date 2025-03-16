
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GemstoneGuide = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gemstone Guide</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-2xl mx-auto">
              Learn about the characteristics, origins, and significance of various gemstones
            </p>
          </div>
          
          <div className="text-center py-16">
            <p className="text-xl text-gem-charcoal mb-4">
              Our comprehensive gemstone guide is coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GemstoneGuide;
