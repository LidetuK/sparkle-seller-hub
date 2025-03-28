import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';


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
          ? 'bg-white shadow-sm backdrop-blur-md' 
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
            <NavLink to="/" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              Home
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              About Us
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              Products
            </NavLink>
            <NavLink to="/gemstone-guide" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              Gemstone Guide
            </NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              Testimonials
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              FAQ
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => cn('nav-link text-light gray', isActive && 'nav-link-active')}>
              Contact
            </NavLink>
          </nav>

{/* Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="text-gem-charcoal" />
            </a>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-gem-charcoal" />
            </a>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://wa.me/+251920537777" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} className="text-gem-charcoal" />
            </a>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://t.me/JOHNESKU22" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={20} className="text-gem-charcoal" />
            </a>
          </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white"
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
        <div className="absolute top-6 right-6">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={24} className="text-gem-charcoal" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6 py-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink 
            to="/gemstone-guide" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Gemstone Guide
          </NavLink>
          <NavLink 
            to="/testimonials" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact"

className={({ isActive }) => cn('text-xl font-medium', isActive ? 'text-gem-red' : 'text-gem-charcoal')}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4 mt-8 border-t border-gray-100 pt-8">
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="text-gem-charcoal" />
            </a>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-gem-charcoal" />
            </a>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://wa.me/+251920537777" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} className="text-gem-charcoal" />
            </a>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <a href="https://t.me/JOHNESKU22" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={20} className="text-gem-charcoal" />
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;