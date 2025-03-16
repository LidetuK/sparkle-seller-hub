
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-2xl mx-auto">
              Explore our exquisite collection of premium gemstones and jewelry
            </p>
          </div>
          
          <div className="text-center py-16">
            <p className="text-xl text-gem-charcoal mb-4">
              This page is coming soon with our full product catalog.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
