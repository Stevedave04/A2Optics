
import React, { useState, useEffect } from 'react';
import { ArrowRight, Handshake, MapPin, Star } from 'lucide-react';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { BRANDS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video / Image Container */}
      <div className="absolute inset-0 z-0 bg-meridian-charcoal">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-70 transition-opacity duration-1000"
          poster="https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=1920&auto=format&fit=crop"
        >
          {/* Using a robust Pexels luxury eyewear video source */}
          <source src="https://videos.pexels.com/video-files/5267023/5267023-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          {/* Fallback for video - Stunning detail of high-end frames */}
          <img 
            src="https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=1920&auto=format&fit=crop" 
            alt="A2OPTICS Luxury Eyewear Craftsmanship"
            className="w-full h-full object-cover grayscale" 
          />
        </video>
        
        {/* Multilayered readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-[0.8]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8 animate-fade-up opacity-0 drop-shadow-2xl">
            Exceptional Eyewear, <span className="italic font-light">Exclusively</span> for Irish Opticians
          </h1>
          <p className="text-lg md:text-xl text-white/95 font-light max-w-2xl mb-12 animate-fade-up-delay opacity-0 drop-shadow-xl leading-relaxed">
            A<sup>2</sup>OPTICS: Bridging the gap between Europe's finest independent eyewear houses and the discerning optical professionals of Ireland and Northern Ireland.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-up-delay-more opacity-0">
            <Link 
              to="/#collections" 
              className="bg-white text-meridian-warmBlack px-10 py-4.5 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-meridian-gold hover:text-white transition-all duration-500 text-center shadow-2xl"
            >
              Explore Collections
            </Link>
            <Link 
              to="/contact" 
              className="backdrop-blur-md border border-white/40 text-white px-10 py-4.5 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-white hover:text-meridian-warmBlack transition-all duration-500 text-center shadow-xl"
            >
              Become a Stockist
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase font-light vertical-rl">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

const Brands: React.FC = () => {
  return (
    <Section id="collections" bgColor="#FAFAF8">
      <div className="text-center mb-24">
        <span className="text-[10px] tracking-extrawide uppercase font-bold text-meridian-gold block mb-6">Our Collections</span>
        <h2 className="font-display text-4xl md:text-5xl font-light">Brands that define contemporary eyewear</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
        {BRANDS.map((brand) => (
          <div key={brand.name} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-10 bg-meridian-lightGrey relative">
              <img 
                src={brand.imageUrl} 
                alt={brand.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                {brand.keywords.slice(0, 1).map(kw => (
                  <span key={kw} className="bg-white/95 backdrop-blur-sm px-4 py-1.5 text-[9px] tracking-widest uppercase font-bold text-meridian-warmBlack shadow-lg">{kw}</span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-baseline border-b border-meridian-borderGrey pb-4">
                <h3 className="font-display text-3xl font-light">{brand.name}</h3>
                <span className="text-[9px] tracking-widest uppercase text-meridian-mediumGrey font-bold">{brand.origin}</span>
              </div>
              <p className="font-accent italic text-sm text-meridian-gold tracking-wide">{brand.tagline}</p>
              <p className="text-sm text-meridian-charcoal font-light leading-relaxed opacity-80">
                {brand.description}
              </p>
              <a 
                href={brand.catalogueLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] tracking-widest uppercase font-bold group/link text-meridian-warmBlack hover:text-meridian-gold transition-colors"
              >
                View Collection 
                <ArrowRight size={14} className="ml-2 transform transition-transform group-hover/link:translate-x-1.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ValueProp: React.FC = () => {
  const features = [
    {
      icon: <Handshake className="w-10 h-10 stroke-[0.75px]" />,
      title: "Exclusive Distribution",
      desc: "Direct partnerships with Europe's most sought-after independent eyewear houses, ensuring unique availability."
    },
    {
      icon: <MapPin className="w-10 h-10 stroke-[0.75px]" />,
      title: "All-Island Coverage",
      desc: "Serving independent opticians throughout the Republic of Ireland and Northern Ireland with reliable logistics."
    },
    {
      icon: <Star className="w-10 h-10 stroke-[0.75px]" />,
      title: "Premium Support",
      desc: "Dedicated account management, training, and tailored marketing materials for your practice's success."
    }
  ];

  return (
    <Section bgColor="#1A1A1A" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">
        {features.map((f, i) => (
          <div key={i} className="space-y-8 group">
            <div className="text-meridian-gold transition-transform duration-500 group-hover:-translate-y-2">{f.icon}</div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold border-l border-meridian-gold pl-4">{f.title}</h3>
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
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" 
          alt="Andrew Arbuthnot Professional Setting" 
          className="aspect-[4/5] shadow-2xl"
          speed={0.15}
        />
        <div className="space-y-10">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-meridian-gold">About A<sup>2</sup>OPTICS</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
            Your Partner in <span className="italic font-normal">Premium</span> Eyewear
          </h2>
          <div className="space-y-8 text-base text-meridian-charcoal font-light leading-relaxed opacity-90">
            <p>
              Founded by Andrew Arbuthnot, A<sup>2</sup>OPTICS bridges the gap between Europe's finest independent eyewear brands and discerning Irish opticians.
            </p>
            <p>
              We believe exceptional eyewear deserves exceptional presentation—which is why we work exclusively with optical professionals who share our commitment to quality, craftsmanship, and singular design.
            </p>
            <p>
              Our portfolio is carefully curated to offer diverse, character-filled collections that help your practice stand out in a competitive marketplace.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="inline-block border-b border-meridian-warmBlack pb-3 text-[10px] tracking-widest uppercase font-bold hover:text-meridian-gold hover:border-meridian-gold transition-all"
          >
            Partner With Us
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
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-meridian-gold">Trusted Perspectives</span>
        </div>
        
        <div className="relative overflow-hidden h-[300px] md:h-56">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
              }`}
            >
              <blockquote className="font-accent italic text-2xl md:text-4xl text-meridian-charcoal leading-[1.6] mb-10">
                "{t.quote}"
              </blockquote>
              <cite className="not-italic">
                <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-meridian-warmBlack">{t.author}</span>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-meridian-gold mt-2 font-medium">{t.practice}</span>
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
                idx === current ? 'bg-meridian-gold w-10' : 'bg-meridian-borderGrey hover:bg-meridian-mediumGrey'
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
    <section className="bg-meridian-charcoal py-32 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-meridian-gold/5 -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl text-white mb-8 font-light">Elevate Your Selection</h2>
        <p className="text-white/60 font-light mb-16 max-w-2xl mx-auto tracking-[0.1em] text-lg leading-relaxed">
          Join our curated network of premium Irish opticians and offer your clients something truly exceptional.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-meridian-warmBlack px-16 py-6 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-meridian-gold hover:text-white transition-all duration-500 shadow-2xl"
        >
          Request Partnership
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
