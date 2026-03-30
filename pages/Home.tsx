
import React, { useState, useEffect } from 'react';
import { ArrowRight, Handshake, MapPin, Compass } from 'lucide-react';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { BRANDS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroImageUrl = "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="relative min-h-screen md:h-screen w-full overflow-hidden flex items-center bg-brand-warmBlack pt-20 pb-32 md:py-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={heroImageUrl}
            alt="a2optics Luxury Eyewear Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <span className="text-[10px] tracking-extrawide uppercase font-bold text-brand-gold mb-8 block animate-fade-up opacity-0">Curated Europe</span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 animate-fade-up-delay opacity-0 drop-shadow-2xl">
            Exceptional Eyewear, <br /><span className="italic font-light text-white/90">Exclusively</span> for Independent Opticians
          </h1>
          <p className="text-base md:text-xl text-white/80 font-light max-w-2xl mb-12 animate-fade-up-delay-more opacity-0 leading-relaxed">
            a2optics: Bridging the gap between the finest independent eyewear houses and discerning optical professionals of Ireland North and South.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-up-delay-more opacity-0">
            <Link 
              to="/#collections" 
              className="bg-brand-gold text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-brand-warmBlack transition-all duration-500 text-center shadow-2xl"
            >
              The Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="backdrop-blur-md border border-white/40 text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-brand-warmBlack transition-all duration-500 text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4 animate-bounce z-10">
        <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase font-light vertical-rl">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns { animation: ken-burns 30s ease-out infinite alternate; }
      `}</style>
    </section>
  );
};

const BrandCard: React.FC<{ brand: any }> = ({ brand }) => {
  const brandFallback = "https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=800&auto=format&fit=crop";
  const [imgSrc, setImgSrc] = useState(brand.imageUrl);

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/5] overflow-hidden mb-10 bg-brand-lightGrey relative border border-brand-borderGrey/20">
        <img 
          src={imgSrc} 
          alt={brand.name} 
          onError={() => setImgSrc(brandFallback)}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-baseline border-b border-brand-borderGrey pb-4">
          <h3 className="font-display text-3xl font-light">{brand.name}</h3>
          <span className="text-[9px] tracking-widest uppercase text-brand-mediumGrey font-bold">{brand.origin}</span>
        </div>
        <p className="font-accent italic text-sm text-brand-gold tracking-wide">{brand.tagline}</p>
        <p className="text-sm text-brand-charcoal font-light leading-relaxed opacity-80">
          {brand.description}
        </p>
        <a 
          href={brand.catalogueLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-[10px] tracking-widest uppercase font-bold group/link text-brand-warmBlack hover:text-brand-gold transition-colors"
        >
          Explore Catalogue 
          <ArrowRight size={14} className="ml-2 transform transition-transform group-hover/link:translate-x-1.5" />
        </a>
      </div>
    </div>
  );
};

const Brands: React.FC = () => {
  return (
    <Section id="collections" bgColor="#FAFAF8">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <span className="text-[10px] tracking-extrawide uppercase font-bold text-brand-gold block mb-6">The Selection</span>
        <h2 className="font-display text-4xl md:text-5xl font-light">Brands that define contemporary European eyewear</h2>
        <p className="mt-6 text-sm text-brand-charcoal/70 font-light leading-relaxed">
          Each house in our portfolio is selected for its commitment to artisanal heritage, sustainable innovation, and singular design language.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 lg:gap-8">
        {BRANDS.map((brand) => (
          <BrandCard key={brand.name} brand={brand} />
        ))}
      </div>
    </Section>
  );
};

const ValueProp: React.FC = () => {
  const features = [
    {
      icon: <Compass className="w-10 h-10 stroke-[0.75px]" />,
      title: "Strategic Curation",
      desc: "We don't just supply frames; we navigate the European landscape to bring you designs that offer true clinical and aesthetic differentiation."
    },
    {
      icon: <MapPin className="w-10 h-10 stroke-[0.75px]" />,
      title: "Regional Expertise",
      desc: "A dedicated partner for independent practices across Ireland, providing local support with a global perspective."
    },
    {
      icon: <Handshake className="w-10 h-10 stroke-[0.75px]" />,
      title: "Exclusive Partnership",
      desc: "We work with a limited number of stockists to ensure territory protection and the long-term success of our brands within your community."
    }
  ];

  return (
    <Section bgColor="#1A1A1A" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">
        {features.map((f, i) => (
          <div key={i} className="space-y-8 group">
            <div className="text-brand-gold transition-transform duration-500 group-hover:-translate-y-2">{f.icon}</div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold border-l border-brand-gold pl-4">{f.title}</h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 lg:gap-32">
        <ParallaxImage 
          src="https://image2url.com/r2/default/images/1769378330861-edd71871-341d-413f-b865-1f68be02c3b7.webp" 
          alt="Andrew Arbuthnot • a2optics" 
          className="aspect-[4/5] shadow-2xl"
          speed={0.15}
        />
        <div className="space-y-10">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold">Provenance • Quality • Care</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
            The <span className="italic font-normal">Independent</span> Connection
          </h2>
          <div className="space-y-8 text-base text-brand-charcoal font-light leading-relaxed opacity-90">
            <p>
              Founded by Andrew Arbuthnot, a2optics was born from a simple observation: Ireland’s finest independent opticians deserve access to Europe’s most distinctive eyewear houses.
            </p>
            <p>
              We act as the premier distributor for boutique brands, bringing the artisanal precision of Austrian workshops and the avant-garde spirit of Barcelona studios directly to your clinical practice.
            </p>
            <p>
              Our curation is driven by a belief that eyewear is the ultimate expression of personality. We partner with professionals who see their work not just as retail, but as the curation of character.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="inline-block border-b border-brand-warmBlack pb-3 text-[10px] tracking-widest uppercase font-bold hover:text-brand-gold hover:border-brand-gold transition-all"
          >
            Start a Partnership
          </Link>
        </div>
      </div>
    </Section>
  );
};

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section bgColor="#FAFAF8" containerSize="narrow">
      <div className="text-center px-4">
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold">Professional Perspectives</span>
        </div>
        
        <div className="relative overflow-hidden h-[300px] md:h-56">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
              }`}
            >
              <blockquote className="font-accent italic text-2xl md:text-4xl text-brand-charcoal leading-[1.6] mb-10">
                "{t.quote}"
              </blockquote>
              <cite className="not-italic">
                <span className="block text-[10px] tracking-[0.4em] uppercase font-bold text-brand-warmBlack">{t.author}</span>
                <span className="block text-[8px] tracking-widest uppercase text-brand-mediumGrey mt-2">{t.practice}</span>
              </cite>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-16">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                idx === current ? 'bg-brand-gold w-10' : 'bg-brand-borderGrey hover:bg-brand-mediumGrey'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const CTABanner: React.FC = () => {
  return (
    <section className="bg-brand-charcoal py-32 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl text-white mb-8 font-light italic">Elevate Your Practice</h2>
        <p className="text-white/60 font-light mb-16 max-w-2xl mx-auto tracking-[0.1em] text-lg leading-relaxed">
          Join our curated network and bring Europe's most exclusive independent designs to your patients.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-brand-warmBlack px-16 py-6 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-brand-gold hover:text-white transition-all duration-500 shadow-2xl"
        >
          Request Partnership Details
        </Link>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <ValueProp />
      <Brands />
      <About />
      <Testimonials />
      <CTABanner />
    </div>
  );
};

export default Home;
