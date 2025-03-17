import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CartForm from '@/components/CartForm';

interface Product {
  id: string;
  name: string;
  category: string;
  
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Ethiopian Copper ore",
    category: "Copper ore",
    image: "/lovable-uploads/COPER copy.jpg",
    isNew: true
  },
  {
    id: "2",
    name: "Ethiopian Tantalum",
    category: "Tantalum",
    image: "/lovable-uploads/TANTHULUM.jpg",
    isNew: true
  },
  {
    id: "3",
    name: "Ethiopian Ruby",
    category: "Ruby",
    image: "/lovable-uploads/RUBY.jpg",
  },
  {
    id: "4",
    name: "Ethiopian Sapphire",
    category: "Sapphire",
    image: "/lovable-uploads/SAPHIER.jpg",
    isNew: true
  },
  {
    id: "5",
    name: "Ethiopian Tourmaline",
    category: "Tourmaline",
    image: "/lovable-uploads/TOURMALINE BLUE.jpg",
    isFeatured: true
  },
  {
    id: "6",
    name: "Ethiopian Emerald",
    category: "Emerald",
    image: "/lovable-uploads/EMERALD.jpg",
  },
  {
    id: "7",
    name: "Ethiopian Opal",
    category: "Opal",
    image: "/lovable-uploads/OPAL.jpg",
  },
  {
    id: "8",
    name: "Ethiopian Aquamarine Stud",
    category: "Aquamarine",
    image: "/lovable-uploads/AQUAMARINE.jpg",
    isNew: true
  }
];

const categories = ["All", "Aquamarine", "Opal", "Emerald", "Tourmaline", "Sapphire", "Ruby", "Tantalum", "Lithium Ore","Copper ore" ];

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Exquisite Collection
          </h2>
          <p className={cn(
            "text-lg text-gem-charcoal/70 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-100 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Discover our handpicked selection of the finest gemstones from around Ethiopia
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
                        <ShoppingCart className="w-4 h-4" />
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
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/products" className="gem-button-primary inline-flex items-center justify-center">
            View All Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;