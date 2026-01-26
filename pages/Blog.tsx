
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { POSTS } from '../constants';
import { Post } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogGridItem: React.FC<{ post: Post }> = ({ post }) => {
  const [imgSrc, setImgSrc] = useState(post.imageUrl);
  const fallback = "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop";

  return (
    <Link to={`/blog/${post.id}`} className="group cursor-pointer block">
      <div className="aspect-[3/4] overflow-hidden mb-8 bg-brand-lightGrey relative border border-brand-borderGrey/10">
        <img 
          src={imgSrc} 
          alt={post.title} 
          onError={() => setImgSrc(fallback)}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] tracking-widest uppercase font-bold text-brand-warmBlack">{post.category}</span>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-light leading-tight group-hover:text-brand-gold transition-colors duration-500">{post.title}</h3>
        <p className="text-sm text-brand-charcoal font-light line-clamp-3 leading-relaxed opacity-80 italic">
          "{post.excerpt}"
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-brand-borderGrey/30">
          <div className="text-[10px] tracking-widest uppercase text-brand-mediumGrey">
            {post.date}
          </div>
          <span className="text-[10px] tracking-widest uppercase font-bold text-brand-warmBlack group-hover:text-brand-gold transition-colors flex items-center gap-2">
            Read <ArrowRight size={10} />
          </span>
        </div>
      </div>
    </Link>
  );
};

const Blog: React.FC = () => {
  const featuredPost = POSTS[0];
  const gridPosts = POSTS.slice(1);
  const [featuredImgSrc, setFeaturedImgSrc] = useState(featuredPost.imageUrl);

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
          <div className="w-full lg:w-3/5 h-[400px] lg:h-[700px] relative overflow-hidden group">
            <Link to={`/blog/${featuredPost.id}`} className="block w-full h-full">
                <ParallaxImage 
                src={featuredImgSrc} 
                alt={featuredPost.title} 
                className="w-full h-full"
                speed={0.1}
                onError={() => setFeaturedImgSrc("https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop")}
                />
            </Link>
          </div>
          <div className="w-full lg:w-2/5 p-10 lg:p-24 flex flex-col justify-center space-y-10">
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-extrawide uppercase font-bold text-brand-gold">{featuredPost.category}</span>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>
            <Link to={`/blog/${featuredPost.id}`} className="block group">
                <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.2] group-hover:text-brand-gold transition-colors">{featuredPost.title}</h2>
            </Link>
            <p className="text-base text-brand-charcoal/80 font-light leading-relaxed font-accent italic">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center text-[10px] tracking-widest uppercase text-brand-mediumGrey space-x-6">
              <span className="font-bold text-brand-warmBlack">{featuredPost.author}</span>
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-4 text-xs tracking-widest uppercase font-bold group border border-brand-warmBlack px-10 py-5 hover:bg-brand-warmBlack hover:text-white transition-all w-fit">
              Read the full story 
              <BookOpen size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <Section id="blog-grid" containerSize="wide">
        <div className="flex justify-between items-end mb-16 border-b border-brand-borderGrey pb-8">
          <h2 className="font-display text-3xl font-light">Recent Perspectives</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {gridPosts.map((post) => (
            <BlogGridItem key={post.id} post={post} />
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
