
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo: React.FC<{ isScrolled: boolean; isHome: boolean }> = ({ isScrolled, isHome }) => {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`font-display text-2xl tracking-[0.2em] uppercase font-light transition-all duration-500 ${!isScrolled && isHome ? 'text-white' : 'text-brand-warmBlack'}`}>
        a2<span className="font-medium italic">optics</span>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/#about' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerStyles = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
    : isHome ? 'bg-transparent py-6' : 'bg-white py-6';

  const navLinkColor = !isScrolled && isHome ? 'text-white' : 'text-brand-warmBlack';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStyles}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/">
          <Logo isScrolled={isScrolled} isHome={isHome} />
        </Link>
        
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] tracking-[0.3em] uppercase font-medium transition-colors hover:text-brand-gold ${navLinkColor}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link 
          to="/contact" 
          className={`hidden lg:block text-[10px] tracking-[0.2em] uppercase font-medium border px-6 py-2.5 transition-all duration-500 ${
            !isScrolled && isHome 
              ? 'border-white text-white hover:bg-white hover:text-brand-warmBlack' 
              : 'border-brand-warmBlack text-brand-warmBlack hover:bg-brand-warmBlack hover:text-white'
          }`}
        >
          Partner With Us
        </Link>
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
              <li><a href="mailto:info@a2optics.ie" className="hover:text-brand-gold transition-colors">info@a2optics.ie</a></li>
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
