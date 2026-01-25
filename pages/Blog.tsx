
import React, { useState, useMemo } from 'react';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { POSTS } from '../constants';
import { Post } from '../types';
import { ArrowRight } from 'lucide-react';

const eyewearFallbacks = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511499767390-a8a197599624?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=800&auto=format&fit=crop"
];

const placeholderTopics = [
  {
    title: "The Resurgence of Bold Acetate: 2025 Style Guide",
    excerpt: "Exploring why high-volume frames are dominating the independent optical scene this season.",
    category: "Trends"
  },
  {
    title: "Handcrafted in the Alps: The Sustainable Story of Rolf",
    excerpt: "Award-winning Austrian craftsmanship meets plant-based innovation in their latest collection.",
    category: "Brand Spotlight"
  },
  {
    title: "Sustainable Luxury: More Than Just a Buzzword",
    excerpt: "How eyewear houses are reducing their carbon footprint without compromising on high-end design.",
    category: "Innovation"
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
    title: "The Barcelona Wave: Why Spanish Design Leads",
    excerpt: "How a new generation of creators is making Barcelona the eyewear capital of the world.",
    category: "Culture"
  }
];

const BlogGridItem: React.FC<{ post: Post; index: number }> = ({ post, index }) => {
  const displayTitle = post.title || placeholderTopics[index % placeholderTopics.length].title;
  const displayExcerpt = post.excerpt || placeholderTopics[index % placeholderTopics.length].excerpt;
  const displayCategory = post.category || placeholderTopics[index % placeholderTopics.length].category;
  
  const fallback = eyewearFallbacks[index % eyewearFallbacks.length];
  const [imgSrc, setImgSrc] = useState(post.imageUrl || fallback);

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/9] overflow-hidden mb-8 bg-meridian-lightGrey relative">
        <img 
          src={imgSrc} 
          alt={displayTitle} 
          onError={() => setImgSrc(fallback)}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4">
        <span className="text-[10px] tracking-extrawide uppercase font-medium text-meridian-gold">{displayCategory}</span>
        <h3 className="font-display text-2xl font-light leading-tight group-hover:text-meridian-gold transition-colors duration-500">{displayTitle}</h3>
        <p className="text-sm text-meridian-charcoal font-light line-clamp-2 leading-relaxed opacity-80">
          {displayExcerpt}
        </p>
        <div className="text-[10px] tracking-widest uppercase text-meridian-mediumGrey mt-4">
          {post.date || 'Spring 2025'} • {post.readTime || '5 min read'}
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const featuredPost = POSTS[0];
  const [featuredImgSrc, setFeaturedImgSrc] = useState(featuredPost.imageUrl);

  // Dynamically generate a full grid of 6 items. 
  // If we have less than 6 real posts, we fill the rest with unique placeholders.
  const displayPosts = useMemo(() => {
    const realPosts = POSTS.slice(1); // Exclude the featured one
    const gridItems: Partial<Post>[] = [...realPosts];
    
    while (gridItems.length < 6) {
      gridItems.push({
        id: `placeholder-${gridItems.length}`,
        date: 'March 2025',
        readTime: `${4 + (gridItems.length % 3)} min read`
      });
    }
    return gridItems as Post[];
  }, []);

  return (
    <div className="pt-24 lg:pt-32">
      <Section id="blog-hero" className="pb-0!">
        <div className="max-w-3xl mb-16">
          <span className="text-xs tracking-extrawide uppercase font-medium text-meridian-gold block mb-6">Insights</span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">Industry Perspectives</h1>
          <p className="text-lg text-meridian-charcoal font-light leading-relaxed">
            A<sup>2</sup>OPTICS: Thought leadership, brand spotlights, and curated trends from the forefront of European independent eyewear.
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      <section className="bg-meridian-offWhite">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-3/5 h-[400px] lg:h-[600px] relative overflow-hidden">
            <ParallaxImage 
              src={featuredImgSrc} 
              alt={featuredPost.title} 
              className="w-full h-full"
              speed={0.1}
              onError={() => setFeaturedImgSrc(eyewearFallbacks[0])}
            />
          </div>
          <div className="w-full lg:w-2/5 p-10 lg:p-20 space-y-8">
            <span className="text-[10px] tracking-extrawide uppercase font-medium text-meridian-gold">{featuredPost.category}</span>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-tight">{featuredPost.title}</h2>
            <p className="text-sm text-meridian-charcoal font-light leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center text-[10px] tracking-widest uppercase text-meridian-mediumGrey space-x-4">
              <span>{featuredPost.author}</span>
              <span className="w-1 h-1 bg-meridian-borderGrey rounded-full"></span>
              <span>{featuredPost.date}</span>
            </div>
            <button className="inline-flex items-center text-xs tracking-widest uppercase font-medium group">
              Read Article 
              <ArrowRight size={14} className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <Section id="blog-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {displayPosts.map((post, idx) => (
            <BlogGridItem key={post.id || idx} post={post} index={idx} />
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <section className="bg-meridian-lightGrey py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4">Stay Informed</h2>
          <p className="text-sm text-meridian-charcoal font-light mb-10 tracking-wide">
            Industry insights and collection updates delivered occasionally to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow bg-white border border-meridian-borderGrey px-6 py-4 focus:outline-none focus:border-meridian-gold text-sm font-light"
            />
            <button className="bg-meridian-warmBlack text-white px-10 py-4 text-xs tracking-extrawide uppercase font-medium hover:bg-meridian-gold transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
