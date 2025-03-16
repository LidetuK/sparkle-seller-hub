
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gem-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="relative w-40 h-12">
                <img 
                  src="/lovable-uploads/65478f6d-c57f-4910-ab8f-055422ee27e4.png" 
                  alt="ONEX Gems" 
                  className="object-contain w-full h-full filter brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Discover exquisite gemstones of the highest quality, ethically sourced and expertly crafted.
            </p>
            <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
  <FaInstagram size={20} />
</a>
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
  <FaFacebook size={20} />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
  <FaTwitter size={20} />
</a>
<a href="https://wa.me/+251920537777" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
  <FaWhatsapp size={20} />
</a>
<a href="https://t.me/JOHNESKU22" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
  <FaTelegram size={20} />
</a>


            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-white transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/gemstone-guide" className="text-white/70 hover:text-white transition-colors duration-200">Gemstone Guide</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/70 hover:text-white transition-colors duration-200">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors duration-200">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-gem-red" size={18} />
                <span className="text-white/70">
                Hawassa City, Sidama Regional State/ Addis Ababa, Kirkos Sub City, Ethiopia.<br />
                810 Saturn St, Jupiter, Florida 33477, United States.<br />
                  
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gem-red" size={18} />
                <a href="tel:+251920537777" className="text-white/70 hover:text-white transition-colors duration-200">
                 (+251) 920537777
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-gem-red" size={18} />
                <a href="mailto:johnesku22@gmail.com" className="text-white/70 hover:text-white transition-colors duration-200">
                johnesku22@gmail.com<br/>
                info@onexonememberplc.com

                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for exclusive offers and gemstone insights.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gem-red focus:border-transparent placeholder-white/50 text-white"
                required
              />
              <button 
                type="submit"
                className="w-full bg-gem-red text-white px-4 py-3 rounded-md hover:bg-gem-red/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>© {currentYear} ONEX Gemstones. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
