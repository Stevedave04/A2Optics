import { Brand, Post, Testimonial } from './types';

export const BRANDS: Brand[] = [
  {
    name: 'Le Parc',
    origin: 'Barcelona, Spain',
    tagline: 'Contemporary design meets sculptural form',
    description: 'Le Parc reinvents eyewear as wearable art. Each frame balances structural strength with organic flow, featuring meticulous craftsmanship and distinctive acetate laminations.',
    catalogueLink: 'https://leparcofficial.com/gb/',
    imageUrl: 'https://image2url.com/r2/default/images/1769358207860-6861692f-4b7c-49fe-9f9e-c893ed8b00b4.jpg',
    keywords: ['Sculptural', 'Artisanal', 'Contemporary']
  },
  {
    name: 'Kaleos',
    origin: 'Barcelona, Spain',
    tagline: 'Fashion-forward eyewear for singular visions',
    description: 'Kaleos combines design innovation with luxury craftsmanship. Each piece takes over a year to develop, resulting in frames that set trends rather than follow them.',
    catalogueLink: 'https://kaleoscollection.com/en_ES/',
    imageUrl: 'https://image2url.com/r2/default/images/1769356891788-4a0ce649-f1af-415c-8a29-c42c55805bb1.png',
    keywords: ['Fashion', 'Innovation', 'Luxury']
  },
  {
    name: 'Rolf',
    origin: 'Tirol, Austria',
    tagline: 'Sustainable eyewear from natural materials',
    description: 'Award-winning Austrian craftsmanship using wood, stone, and plant-based materials. Rolf proves that sustainability and luxury are not mutually exclusive.',
    catalogueLink: 'https://www.rolf-spectacles.com/en/',
    imageUrl: 'https://image2url.com/r2/default/images/1769357862817-124c0976-3eb6-4a14-afc8-1d200524e42d.jpg',
    keywords: ['Sustainable', 'Natural', 'Award-winning']
  },
  {
    name: 'Raen',
    origin: 'Oceanside, California',
    tagline: 'Modern classics with a California soul',
    description: 'Envisioned in California and handcrafted from premium acetate. Raen is driven by the desire to create authentic, timeless eyewear with a meticulous attention to detail and fit.',
    catalogueLink: 'https://raen.eu/',
    imageUrl: 'https://image2url.com/r2/default/images/1769356550077-3c94a321-c0f5-4c38-8449-0b6b121d0fce.png',
    keywords: ['Modern Classic', 'Handcrafted', 'Coastal']
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
    imageUrl: 'https://image2url.com/r2/default/images/1769356586139-84f6b0cf-2753-4f84-bdd5-ae768585c617.png'
  },
  {
    id: '2',
    category: 'Brand Spotlight',
    title: "Barcelona's Eyewear Revolution: A²OPTICS Curated Favorites",
    excerpt: 'How two Spanish brands are shaping contemporary eyewear design.',
    author: 'Andrew Arbuthnot',
    date: 'January 2025',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    category: 'Practice Tips',
    title: 'Presenting Premium Eyewear: A Guide for Opticians',
    excerpt: 'Strategies for positioning luxury frames to your clientele.',
    author: 'Andrew Arbuthnot',
    date: 'December 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1591076482161-421a3aaee5f7?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A²OPTICS has transformed our premium eyewear offering. The brands they represent are exactly what our discerning clients are looking for.",
    author: "J.O.",
    practice: "Independent Optician"
  },
  {
    quote: "Exceptional service and truly unique collections. Our customers love the exclusivity of the European houses Andrew brings to us via A²OPTICS.",
    author: "S.M.",
    practice: "Independent Optician"
  }
];