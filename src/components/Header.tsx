
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8',
        isScrolled 
          ? 'bg-white/80 shadow-sm backdrop-blur-md' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <div className="relative w-40 h-12">
              <img 
                src="/lovable-uploads/65478f6d-c57f-4910-ab8f-055422ee27e4.png" 
                alt="ONEX Gems" 
                className="object-contain w-full h-full"
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              Home
            </NavLink>
            <NavLink to="/products" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              Products
            </NavLink>
            <NavLink to="/gemstone-guide" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              Gemstone Guide
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              Blog
            </NavLink>
            <NavLink to="/testimonials" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              Testimonials
            </NavLink>
            <NavLink to="/about-us" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              Contact
            </NavLink>
            <NavLink to="/faq" className={({isActive}) => cn('nav-link', isActive && 'nav-link-active')}>
              FAQ
            </NavLink>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} className="text-gem-charcoal" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User size={20} className="text-gem-charcoal" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart size={20} className="text-gem-charcoal" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gem-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 py-8">
          <NavLink 
            to="/" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink 
            to="/gemstone-guide" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Gemstone Guide
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/testimonials" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({isActive}) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4 mt-8 border-t border-gray-100 pt-8">
          <button className="p-2 rounded-full bg-gray-100">
            <Search size={20} className="text-gem-charcoal" />
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <User size={20} className="text-gem-charcoal" />
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <ShoppingCart size={20} className="text-gem-charcoal" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
