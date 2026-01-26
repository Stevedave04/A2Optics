
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { POSTS } from '../constants';
import Section from '../components/Section';
import ParallaxImage from '../components/ParallaxImage';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(POSTS.find(p => p.id === id));

  useEffect(() => {
    const foundPost = POSTS.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) return null;

  return (
    <div className="pt-24 lg:pt-32 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <Link to="/blog" className="inline-flex items-center text-[10px] tracking-widest uppercase font-bold text-brand-mediumGrey hover:text-brand-gold transition-colors mb-8 group">
          <ArrowLeft size={12} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>
        
        <div className="max-w-4xl">
          <span className="text-xs tracking-extrawide uppercase font-bold text-brand-gold block mb-6">{post.category}</span>
          <h1 className="font-display text-4xl md:text-6xl font-light leading-[1.1] mb-8 text-brand-warmBlack">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-[11px] tracking-widest uppercase text-brand-mediumGrey border-y border-brand-borderGrey py-6 mb-12">
            <div className="flex items-center gap-2">
              <User size={14} />
              <span className="font-bold text-brand-warmBlack">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden mb-20 bg-brand-lightGrey">
         <ParallaxImage 
           src={post.imageUrl} 
           alt={post.title} 
           className="w-full h-full"
           speed={0.1}
         />
      </div>

      <Section containerSize="narrow" className="pt-0!">
        <div className="prose prose-lg prose-headings:font-display prose-headings:font-light prose-p:font-light prose-p:leading-relaxed prose-p:text-brand-charcoal hover:prose-a:text-brand-gold max-w-none">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="mb-8 text-lg md:text-xl leading-8 opacity-90 first-letter:text-4xl first-letter:font-display first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-brand-borderGrey">
           <h3 className="font-display text-2xl font-light mb-8">Related Perspectives</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {POSTS.filter(p => p.id !== post.id).slice(0, 2).map(related => (
               <Link key={related.id} to={`/blog/${related.id}`} className="group block">
                 <div className="aspect-video overflow-hidden mb-4 bg-brand-lightGrey">
                   <img src={related.imageUrl} alt={related.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 </div>
                 <h4 className="font-display text-xl group-hover:text-brand-gold transition-colors">{related.title}</h4>
               </Link>
             ))}
           </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPost;
