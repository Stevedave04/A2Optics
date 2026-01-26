
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <div className="flex items-center gap-3 group relative z-50">
      <div className={`font-display text-2xl tracking-[0.2em] uppercase font-light transition-all duration-500 ${!isDark ? 'text-white' : 'text-brand-warmBlack'}`}>
        a2<span className="font-medium italic">optics</span>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerStyles = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
    : isHome ? 'bg-transparent py-6' : 'bg-white py-6';

  // Determine if elements should be dark based on scroll, page, or menu state
  // If menu is open, we always want dark elements because the menu bg is light (offWhite)
  const isDarkElements = isScrolled || !isHome || isMobileMenuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isMobileMenuOpen ? 'bg-transparent' : headerStyles}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo isDark={isDarkElements} />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] tracking-[0.3em] uppercase font-medium transition-colors hover:text-brand-gold ${!isDarkElements ? 'text-white' : 'text-brand-warmBlack'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link 
          to="/contact" 
          className={`hidden lg:block text-[10px] tracking-[0.2em] uppercase font-medium border px-6 py-2.5 transition-all duration-500 ${
            !isDarkElements 
              ? 'border-white text-white hover:bg-white hover:text-brand-warmBlack' 
              : 'border-brand-warmBlack text-brand-warmBlack hover:bg-brand-warmBlack hover:text-white'
          }`}
        >
          Partner With Us
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 -mr-2 relative z-50 transition-colors duration-300 ${isDarkElements ? 'text-brand-warmBlack' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-offWhite z-40 flex flex-col items-center justify-center transition-all duration-500 transform ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-8 w-full px-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-display text-4xl font-light text-brand-warmBlack hover:text-brand-gold transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${100 + idx * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div 
            className={`pt-8 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${100 + navLinks.length * 100}ms` }}
          >
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[10px] tracking-[0.3em] uppercase font-bold border border-brand-warmBlack px-10 py-5 hover:bg-brand-warmBlack hover:text-white transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-offWhite border-t border-brand-borderGrey pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="font-display text-2xl tracking-widest uppercase font-light">a2<span className="italic font-medium">optics</span></h3>
            <p className="text-sm text-brand-charcoal font-light leading-relaxed max-w-xs opacity-80">
              Exclusive curator of independent European eyewear for the professional optical practices of Ireland.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal font-light">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/#collections" className="hover:text-brand-gold transition-colors">Collections</Link></li>
              <li><Link to="/#about" className="hover:text-brand-gold transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-8">Our Brands</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal font-light">
              <li><a href="https://leparcofficial.com/gb/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Le Parc</a></li>
              <li><a href="https://kaleoscollection.com/en_ES/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Kaleos</a></li>
              <li><a href="https://raen.eu/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Raen</a></li>
              <li><a href="https://www.rolf-spectacles.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Rolf</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-brand-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal font-light">
              <li className="font-medium text-brand-warmBlack">Andrew Arbuthnot</li>
              <li><a href="mailto:info@a2optics.com" className="hover:text-brand-gold transition-colors">info@a2optics.com</a></li>
              <li>+44 (0) 7703 166036</li>
              <li className="pt-2 italic">Ireland North & South</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-borderGrey/50 gap-6">
          <p className="text-[10px] tracking-widest uppercase text-brand-mediumGrey">
            © 2026 a2optics. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] tracking-widest uppercase text-brand-mediumGrey">
            <Link to="/privacy-policy" className="hover:text-brand-warmBlack transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-warmBlack transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-gold selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
