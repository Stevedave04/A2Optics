
import React from 'react';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';
import { POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = POSTS[0];
  const gridPosts = POSTS.slice(1);

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
          <ParallaxImage 
            src={featuredPost.imageUrl} 
            alt={featuredPost.title} 
            className="w-full lg:w-3/5 h-[400px] lg:h-[600px]"
            speed={0.1}
          />
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
          {[...gridPosts, ...gridPosts, ...gridPosts].map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden mb-8 bg-meridian-lightGrey relative">
                <img 
                  src={`https://picsum.photos/seed/post-${idx}/800/450`} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
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
          <form className="flex flex-col sm:flex-row gap-4">
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
