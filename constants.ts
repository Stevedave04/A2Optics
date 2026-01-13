
import { Brand, Post, Testimonial } from './types';

export const BRANDS: Brand[] = [
  {
    name: 'Le Parc',
    origin: 'Barcelona, Spain',
    tagline: 'Contemporary design meets sculptural form',
    description: 'Le Parc reinvents eyewear as wearable art. Each frame balances structural strength with organic flow, featuring meticulous craftsmanship and distinctive acetate laminations.',
    catalogueLink: 'https://leparcofficial.com/gb/',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    keywords: ['Sculptural', 'Artisanal', 'Contemporary']
  },
  {
    name: 'Kaleos',
    origin: 'Barcelona, Spain',
    tagline: 'Fashion-forward eyewear for singular visions',
    description: 'Kaleos combines design innovation with luxury craftsmanship. Each piece takes over a year to develop, resulting in frames that set trends rather than follow them.',
    catalogueLink: 'https://kaleoscollection.com/en_ES/',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop',
    keywords: ['Fashion', 'Innovation', 'Luxury']
  },
  {
    name: 'Rolf',
    origin: 'Tirol, Austria',
    tagline: 'Sustainable eyewear from natural materials',
    description: 'Award-winning Austrian craftsmanship using wood, stone, and plant-based materials. Rolf proves that sustainability and luxury are not mutually exclusive.',
    catalogueLink: 'https://www.rolf-spectacles.com/en/',
    imageUrl: 'https://images.unsplash.com/photo-1508243529287-e21914733111?q=80&w=800&auto=format&fit=crop',
    keywords: ['Sustainable', 'Natural', 'Award-winning']
  }
];

export const POSTS: Post[] = [
  {
    id: '1',
    category: 'Industry Trends',
    title: 'Why Independent Eyewear Brands Are the Future of Optical Retail',
    excerpt: 'Consumers are seeking uniqueness and quality over mass-market options.',
    author: 'Andrew Arbuthnot',
    date: 'February 2025',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    category: 'Brand Spotlight',
    title: "Barcelona's Eyewear Revolution: A²OPTICS Curated Favorites",
    excerpt: 'How two Spanish brands are shaping contemporary eyewear design.',
    author: 'Andrew Arbuthnot',
    date: 'January 2025',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    category: 'Practice Tips',
    title: 'Presenting Premium Eyewear: A Guide for Opticians',
    excerpt: 'Strategies for positioning luxury frames to your clientele.',
    author: 'Andrew Arbuthnot',
    date: 'December 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A²OPTICS has transformed our premium eyewear offering. The brands they represent are exactly what our discerning clients are looking for.",
    author: "Jameson O'Reilly",
    practice: "O'Reilly Opticians, Dublin"
  },
  {
    quote: "Exceptional service and truly unique collections. Our customers love the exclusivity of the European houses Andrew brings to us via A²OPTICS.",
    author: "Sarah McConnell",
    practice: "Belfast Visionary, Belfast"
  }
];
