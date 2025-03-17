
import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartForm from '@/components/CartForm';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Ethiopian Lithium Ore",
    category: "Lithium Ore",
    image: "/lovable-uploads/LITHIUM ORE.jpg",
    isFeatured: true,
    description: "Ethiopian lithium ore is a key resource for the growing battery and renewable energy industries, powering electric vehicles and modern electronics.",
  },
  {
    id: "2",
    name: "Ethiopian Tantalum",
    category: "Tantalum",
    image: "/lovable-uploads/TANTHULUM.jpg",
    isNew: true,
    description: "Ethiopian tantalum is a rare and valuable metal essential for high-tech industries, including electronics, aerospace, and medical devices.",
  },
  {
    id: "3",
    name: "Ethiopian Ruby",
    category: "Ruby",
    image: "/lovable-uploads/RUBY.jpg",
    description: "Ethiopian rubies are known for their rich red hue and impressive transparency, making them a valuable addition to fine jewelry collections."
  },
  {
    id: "4",
    name: "Ethiopian Sapphire",
    category: "Sapphire",
    image: "/lovable-uploads/SAPHIER.jpg",
    isNew: true,
    description: "Ethiopian sapphires come in stunning shades of blue, yellow, and pink, offering exceptional brilliance and affordability."
  },
  {
    id: "5",
    name: "Ethiopian Tourmaline",
    category: "Tourmaline",
    image: "/lovable-uploads/TOURMALINE BLUE.jpg",
    isFeatured: true,
    description: "Ethiopian tourmaline is a versatile gemstone available in stunning shades of green, pink, and bi-color variations, ideal for unique and elegant jewelry."
  },
  {
    id: "6",
    name: "Ethiopian Emerald",
    category: "Emerald",
    image: "/lovable-uploads/EMERALD.jpg",
    description: "Ethiopian emeralds are prized for their rich green color and remarkable clarity, offering a cost-effective alternative to traditional emeralds."
  },
  {
    id: "7",
    name: "Ethiopian Opal",
    category: "Opal",
    image: "/lovable-uploads/OPAL.jpg",
    description: "Ethiopian opals are famous for their mesmerizing play-of-color, displaying vibrant flashes of red, green, blue, and yellow."
  },
  {
    id: "8",
    name: "Ethiopian Aquamarine Stud",
    category: "Aquamarine",
    image: "/lovable-uploads/AQUAMARINE.jpg",
    isNew: true,
    description: "An elegant necklace featuring a large South Sea pearl pendant suspended from a diamond-encrusted chain."
  },
  {
    id: "9",
    name: "Ethiopian Copper Ore",
    category: "Copper ore",
    image: "/lovable-uploads/COPER copy.jpg",
    isNew: true,
    description: "Copper ore or Malachite with an excellent grade. We have a large quantity of copper ore for sale."
  }
];

const categories = ["All", "Aquamarine", "Opal", "Emerald", "Tourmaline", "Sapphire", "Ruby", "Tantalum", "Lithium Ore", "Copper ore"];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16 w-full">
        <div className="container mx-auto px-6 max-w-[100%]">
          <div className="text-center mb-16" ref={ref}>
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Our Products
            </h1>
            <p className={cn(
              "text-lg text-gem-charcoal/70 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-100 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Explore our exquisite collection of premium gemstones
            </p>
            
            {/* Category Filter */}
            <div className={cn(
              "flex flex-wrap justify-center gap-2 mb-10 transition-all duration-1000 delay-200 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-full transition-all duration-300",
                    selectedCategory === category
                      ? "bg-gem-charcoal text-white shadow-sm"
                      : "bg-white text-gem-charcoal/70 hover:bg-gray-100 border border-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={cn(
                  "group relative transition-all duration-500 delay-[calc(100ms*var(--index))] transform",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{"--index": index} as React.CSSProperties}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick actions */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Dialog open={dialogOpen && selectedProduct?.id === product.id} onOpenChange={(open) => {
                      setDialogOpen(open);
                      if (!open) setSelectedProduct(null);
                    }}>
                      <DialogTrigger asChild>
                        <button 
                          className="w-full bg-white py-3 rounded-md font-medium shadow-lg hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-2"
                          onClick={() => {
                            setSelectedProduct(product);
                            setDialogOpen(true);
                          }}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        {selectedProduct && (
                          <CartForm 
                            product={selectedProduct} 
                            onClose={handleDialogClose} 
                          />
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {/* Badges */}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-gem-red text-white text-xs px-2 py-1 rounded-md">New</span>
                  )}
                  {product.isFeatured && (
                    <span className="absolute top-3 left-3 bg-gem-yellow text-white text-xs px-2 py-1 rounded-md">Featured</span>
                  )}
                </div>
                
                <div className="text-center">
                  <span className="text-sm text-gem-charcoal/60 mb-1 block">{product.category}</span>
                  <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                  <p className="mt-2 text-sm text-gem-charcoal/70 line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
