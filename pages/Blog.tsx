import React, { useState, useMemo } from 'react';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { POSTS } from '../constants';
import { Post } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

const eyewearFallbacks = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511499767390-a8a197599624?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509100104034-476ce85a91ee?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
];

const placeholderJournalTopics = [
  {
    title: "Organic Curves: Why Sculptural Eyewear is Reclaiming the Face",
    excerpt: "Moving beyond minimalist metal, the industry is seeing a return to high-volume acetate and hand-carved natural materials.",
    category: "Artisanal"
  },
  {
    title: "The Plant-Based Revolution in Premium Optical Frames",
    excerpt: "How bio-acetates and recycled marine plastics are being transformed into heirloom-quality luxury pieces.",
    category: "Sustainability"
  },
  {
    title: "The Independent Edge: Navigating the 2025 Market",
    excerpt: "Strategic insights for optical practice owners on competing with global conglomerates through curation.",
    category: "Retail Strategy"
  },
  {
    title: "The Art of Japanese Titanium: Precision Engineering",
    excerpt: "Delving into the world's most sophisticated metalwork for ultra-lightweight frames.",
    category: "Craftsmanship"
  },
  {
    title: "Finding the Perfect Fit: A Guide to Facial Anatomy",
    excerpt: "Strategic advice for opticians on pairing unique bridge designs with distinctive facial structures.",
    category: "Practice Tips"
  },
  {
    title: "The Mediterranean Light: Designing for Barcelona",
    excerpt: "How the unique quality of coastal Spanish light informs the color palettes of independent design houses.",
    category: "Design Trends"
  },
  {
    title: "Heritage Reimagined: The 1960s Influence in 2025",
    excerpt: "A deep dive into how mid-century silhouettes are being updated for the modern clinical practice.",
    category: "Trends"
  },
  {
    title: "The Future of Austrian Craftsmanship",
    excerpt: "Exploring the legendary workshops of Tirol and their uncompromising approach to wood and stone.",
    category: "Provenance"
  }
];

const BlogGridItem: React.FC<{ post: Post; index: number }> = ({ post, index }) => {
  const isPlaceholder = post.id.startsWith('placeholder');
  
  // Dynamically select varied content based on index for placeholders
  const topic = placeholderJournalTopics[index % placeholderJournalTopics.length];
  
  const displayTitle = !isPlaceholder ? post.title : topic.title;
  const displayExcerpt = !isPlaceholder ? post.excerpt : topic.excerpt;
  const displayCategory = !isPlaceholder ? post.category : topic.category;
  
  // Use a unique image from the fallback array based on index
  const fallback = eyewearFallbacks[index % eyewearFallbacks.length];
  const [imgSrc, setImgSrc] = useState(post.imageUrl || fallback);

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden mb-8 bg-brand-lightGrey relative border border-brand-borderGrey/10">
        <img 
          src={imgSrc} 
          alt={displayTitle} 
          onError={() => setImgSrc(fallback)}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] tracking-widest uppercase font-bold text-brand-warmBlack">{displayCategory}</span>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-light leading-tight group-hover:text-brand-gold transition-colors duration-500">{displayTitle}</h3>
        <p className="text-sm text-brand-charcoal font-light line-clamp-3 leading-relaxed opacity-80 italic">
          "{displayExcerpt}"
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-brand-borderGrey/30">
          <div className="text-[10px] tracking-widest uppercase text-brand-mediumGrey">
            {post.date || 'Spring 2025'}
          </div>
          <button className="text-[10px] tracking-widest uppercase font-bold text-brand-warmBlack group-hover:text-brand-gold transition-colors flex items-center gap-2">
            Read <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const featuredPost = POSTS[0];
  const [featuredImgSrc, setFeaturedImgSrc] = useState(featuredPost.imageUrl);

  const displayPosts = useMemo(() => {
    const realPosts = POSTS.slice(1);
    const gridItems: Partial<Post>[] = [...realPosts];
    
    // Fill up to 9 items for a robust grid look
    while (gridItems.length < 9) {
      gridItems.push({
        id: `placeholder-${gridItems.length}`,
        date: 'March 2025',
        readTime: `${5 + (gridItems.length % 3)} min read`
      });
    }
    return gridItems as Post[];
  }, []);

  return (
    <div className="pt-24 lg:pt-32">
      <Section id="blog-hero" className="pb-0!">
        <div className="max-w-4xl mb-16">
          <span className="text-xs tracking-extrawide uppercase font-bold text-brand-gold block mb-6">The a2optics Journal</span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">Reflections on <span className="italic">Provenance</span> and Design</h1>
          <p className="text-lg text-brand-charcoal font-light leading-relaxed max-w-2xl">
            A collection of industry insights, artisan spotlights, and strategic perspectives curated specifically for the independent optical professional.
          </p>
        </div>
      </Section>

      {/* Featured Editorial */}
      <section className="bg-brand-offWhite overflow-hidden">
        <div className="container mx-auto px-0 lg:px-12 flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-3/5 h-[400px] lg:h-[700px] relative overflow-hidden">
            <ParallaxImage 
              src={featuredImgSrc} 
              alt={featuredPost.title} 
              className="w-full h-full"
              speed={0.1}
              onError={() => setFeaturedImgSrc(eyewearFallbacks[0])}
            />
          </div>
          <div className="w-full lg:w-2/5 p-10 lg:p-24 flex flex-col justify-center space-y-10">
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-extrawide uppercase font-bold text-brand-gold">{featuredPost.category}</span>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.2]">{featuredPost.title}</h2>
            <p className="text-base text-brand-charcoal/80 font-light leading-relaxed font-accent italic">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center text-[10px] tracking-widest uppercase text-brand-mediumGrey space-x-6">
              <span className="font-bold text-brand-warmBlack">{featuredPost.author}</span>
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <button className="inline-flex items-center gap-4 text-xs tracking-widest uppercase font-bold group border border-brand-warmBlack px-10 py-5 hover:bg-brand-warmBlack hover:text-white transition-all">
              Read the full story 
              <BookOpen size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <Section id="blog-grid" containerSize="wide">
        <div className="flex justify-between items-end mb-16 border-b border-brand-borderGrey pb-8">
          <h2 className="font-display text-3xl font-light">Journal Archive</h2>
          <div className="hidden md:flex gap-8 text-[10px] tracking-widest uppercase font-bold opacity-40">
            <span className="cursor-pointer hover:opacity-100 transition-opacity">Design</span>
            <span className="cursor-pointer hover:opacity-100 transition-opacity">Retail</span>
            <span className="cursor-pointer hover:opacity-100 transition-opacity">Artisanal</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {displayPosts.map((post, idx) => (
            <BlogGridItem key={post.id || idx} post={post} index={idx} />
          ))}
        </div>
      </Section>

      {/* Mailing List */}
      <section className="bg-brand-warmBlack py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold opacity-50"></div>
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold mb-8 block">a2optics Correspondence</span>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-white italic">Curated Industry Intelligence</h2>
          <p className="text-sm text-white/60 font-light mb-12 tracking-wide leading-relaxed">
            Join a select group of independent optical professionals who receive our quarterly insights into European design trends and strategic retail curation.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-white/20" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Professional email address" 
              className="flex-grow bg-transparent text-white px-8 py-5 focus:outline-none text-sm font-light placeholder:text-white/30"
            />
            <button className="bg-brand-gold text-white px-12 py-5 text-[10px] tracking-extrawide uppercase font-bold hover:bg-white hover:text-brand-warmBlack transition-all duration-300">
              Request Inclusion
            </button>
          </form>
          <p className="text-[9px] text-white/20 mt-6 tracking-widest uppercase">Strictly for clinical & optical professionals</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;