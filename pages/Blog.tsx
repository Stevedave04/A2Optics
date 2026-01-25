
import React, { useState } from 'react';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { POSTS } from '../constants';
import { Post } from '../types';
import { ArrowRight } from 'lucide-react';

const eyewearFallbacks = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=800&auto=format&fit=crop"
];

const BlogGridItem: React.FC<{ post: Post; index: number }> = ({ post, index }) => {
  const [imgSrc, setImgSrc] = useState(post.imageUrl || eyewearFallbacks[index % eyewearFallbacks.length]);
  const fallback = eyewearFallbacks[index % eyewearFallbacks.length];

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/9] overflow-hidden mb-8 bg-meridian-lightGrey relative">
        <img 
          src={imgSrc} 
          alt={post.title} 
          onError={() => setImgSrc(fallback)}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-4">
        <span className="text-[10px] tracking-extrawide uppercase font-medium text-meridian-gold">{post.category}</span>
        <h3 className="font-display text-2xl font-light leading-tight group-hover:text-meridian-gold transition-colors">{post.title}</h3>
        <p className="text-sm text-meridian-charcoal font-light line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="text-[10px] tracking-widest uppercase text-meridian-mediumGrey mt-4">
          {post.date} • {post.readTime}
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const featuredPost = POSTS[0];
  const gridPosts = POSTS.slice(1);
  
  const [featuredImgSrc, setFeaturedImgSrc] = useState(featuredPost.imageUrl);

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
            {/* ParallaxImage internally uses an img, but we manage the src here to handle the error state */}
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
          {/* We repeat the sample posts to populate the grid for visual impact */}
          {[...gridPosts, ...gridPosts, ...gridPosts].map((post, idx) => (
            <BlogGridItem key={idx} post={post} index={idx} />
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
            <button className="bg-meridian-warmBlack text-white px-10 py-4 text-xs tracking-extrawide uppercase font-medium hover:bg-meridian-gold transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
