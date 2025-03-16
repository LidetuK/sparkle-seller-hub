
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
  price: string;
  image: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Emerald Cut Diamond",
    category: "Diamond",
    price: "$3,999",
    image: "https://images.unsplash.com/photo-1585149869791-8eeec5729d84?q=80&w=2970&auto=format&fit=crop",
    description: "A stunning emerald cut diamond set in 18k white gold. This elegant piece features a 1.5-carat diamond of exceptional clarity and color.",
    isFeatured: true
  },
  {
    id: "2",
    name: "Ruby Oval Ring",
    category: "Ruby",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    description: "A vibrant ruby oval ring featuring a 2-carat natural ruby surrounded by brilliant-cut diamonds in a halo setting.",
    isNew: true
  },
  {
    id: "3",
    name: "Sapphire Pendant",
    category: "Sapphire",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1600003263760-95b25a0ece9a?q=80&w=1932&auto=format&fit=crop",
    description: "An elegant sapphire pendant with a deep blue 1.5-carat sapphire, suspended from a delicate 18k white gold chain."
  },
  {
    id: "4",
    name: "Amethyst Earrings",
    category: "Amethyst",
    price: "$899",
    image: "https://images.unsplash.com/photo-1584654573502-96701f1fac11?q=80&w=2070&auto=format&fit=crop",
    description: "Beautiful drop earrings featuring 3-carat amethysts in a vintage-inspired setting with small diamond accents.",
    isNew: true
  },
  {
    id: "5",
    name: "Emerald Silver Ring",
    category: "Emerald",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1974&auto=format&fit=crop",
    description: "A classic emerald ring featuring a 1-carat Colombian emerald set in sterling silver with pavé diamond accents.",
    isFeatured: true
  },
  {
    id: "6",
    name: "Tanzanite Necklace",
    category: "Tanzanite",
    price: "$2,199",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1974&auto=format&fit=crop",
    description: "A luxurious tanzanite necklace featuring a rare 2-carat tanzanite gemstone with a trillion cut, set in 14k rose gold."
  },
  {
    id: "7",
    name: "Opal Bracelet",
    category: "Opal",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1980&auto=format&fit=crop",
    description: "A stunning bracelet featuring Australian opals alternating with small diamonds in a 14k yellow gold setting."
  },
  {
    id: "8",
    name: "Aquamarine Stud",
    category: "Aquamarine",
    price: "$799",
    image: "https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?q=80&w=2070&auto=format&fit=crop",
    description: "Elegant stud earrings featuring 1-carat aquamarines in a minimalist platinum setting, perfect for everyday wear.",
    isNew: true
  },
  {
    id: "9",
    name: "Morganite Rose Gold Ring",
    category: "Morganite",
    price: "$1,599",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470&auto=format&fit=crop",
    description: "A romantic ring featuring a cushion-cut morganite gemstone in a rose gold setting with a diamond halo."
  },
  {
    id: "10",
    name: "Peridot Drop Earrings",
    category: "Peridot",
    price: "$899",
    image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=1480&auto=format&fit=crop",
    description: "Vibrant peridot drop earrings featuring pear-shaped peridots suspended from a delicate 14k gold chain."
  },
  {
    id: "11",
    name: "Tourmaline Cocktail Ring",
    category: "Tourmaline",
    price: "$1,799",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1470&auto=format&fit=crop",
    description: "A statement cocktail ring featuring a large watermelon tourmaline surrounded by small diamonds in a unique setting."
  },
  {
    id: "12",
    name: "Pearl and Diamond Necklace",
    category: "Pearl",
    price: "$2,299",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1470&auto=format&fit=crop",
    description: "An elegant necklace featuring a large South Sea pearl pendant suspended from a diamond-encrusted chain."
  }
];

const categories = ["All", "Diamond", "Ruby", "Sapphire", "Emerald", "Amethyst", "Opal", "Aquamarine", "Tanzanite", "Morganite", "Peridot", "Tourmaline", "Pearl"];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
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
              Explore our exquisite collection of premium gemstones and jewelry
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <button 
                          className="w-full bg-white py-3 rounded-md font-medium shadow-lg hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-2"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        {selectedProduct && (
                          <CartForm 
                            product={selectedProduct} 
                            onClose={() => setSelectedProduct(null)} 
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
                  <p className="text-lg font-semibold text-gem-charcoal">{product.price}</p>
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
