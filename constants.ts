import { Brand, Post, Testimonial } from './types';

export const BRANDS: Brand[] = [
  {
    name: 'Le Parc',
    origin: 'Barcelona, Spain',
    tagline: 'Wearable architecture for the visionary mind',
    description: 'Le Parc reimagines eyewear as sculptural form. Balancing structural strength with organic fluidity, each frame is a testament to Barcelona’s avant-garde design heritage.',
    catalogueLink: 'https://leparcofficial.com/gb/',
    imageUrl: 'https://image2url.com/r2/default/images/1769358207860-6861692f-4b7c-49fe-9f9e-c893ed8b00b4.jpg',
    keywords: ['Sculptural', 'Artisanal', 'Contemporary']
  },
  {
    name: 'Kaleos',
    origin: 'Barcelona, Spain',
    tagline: 'Fashion-forward precision in every curve',
    description: 'Kaleos challenges the status quo by merging design innovation with luxury craftsmanship. Their pieces don’t just follow trends—they define the silhouette of contemporary luxury.',
    catalogueLink: 'https://kaleoscollection.com/en_ES/',
    imageUrl: 'https://image2url.com/r2/default/images/1769356891788-4a0ce649-f1af-415c-8a29-c42c55805bb1.png',
    keywords: ['Fashion', 'Innovation', 'Luxury']
  },
  {
    name: 'Rolf',
    origin: 'Tirol, Austria',
    tagline: 'Pioneering sustainability from the Austrian Alps',
    description: 'Handcrafted in Tirol using wood, stone, and plant-based materials. Rolf proves that deep sustainability and high-end aesthetic value are perfectly aligned.',
    catalogueLink: 'https://www.rolf-spectacles.com/en/',
    imageUrl: 'https://image2url.com/r2/default/images/1769357862817-124c0976-3eb6-4a14-afc8-1d200524e42d.jpg',
    keywords: ['Sustainable', 'Natural', 'Award-winning']
  },
  {
    name: 'Raen',
    origin: 'Oceanside, California',
    tagline: 'Modern classics with a meticulous soul',
    description: 'Though born of the coast, Raen’s craftsmanship rivals the finest European houses. Hand-polished acetates and timeless geometry make them an essential for the curated practice.',
    catalogueLink: 'https://raen.eu/',
    imageUrl: 'https://image2url.com/r2/default/images/1769356550077-3c94a321-c0f5-4c38-8449-0b6b121d0fce.png',
    keywords: ['Modern Classic', 'Handcrafted', 'Coastal']
  }
];

export const POSTS: Post[] = [
  {
    id: '1',
    category: 'a2optics Perspectives',
    title: 'Tirol’s Finest: The Alpine Philosophy of Sustainable Luxury',
    excerpt: 'How a small workshop in the Austrian Alps is leading the global shift toward plant-based eyewear without compromising on aesthetic high-performance.',
    author: 'Andrew Arbuthnot',
    date: 'February 2025',
    readTime: '6 min read',
    imageUrl: 'https://image2url.com/r2/default/images/1769357862817-124c0976-3eb6-4a14-afc8-1d200524e42d.jpg'
  },
  {
    id: '2',
    category: 'Design Intelligence',
    title: "Barcelona’s Eyewear Revolution: Architecture on the Face",
    excerpt: 'Exploring the intersection of Mediterranean light and sculptural form in the latest collections from Le Parc and Kaleos.',
    author: 'Andrew Arbuthnot',
    date: 'January 2025',
    readTime: '5 min read',
    imageUrl: 'https://image2url.com/r2/default/images/1769356891788-4a0ce649-f1af-415c-8a29-c42c55805bb1.png'
  },
  {
    id: '3',
    category: 'Retail Strategy',
    title: 'The Independent Edge: Curating Character in a Mass-Market World',
    excerpt: 'Why independent opticians are finding success by moving away from conglomerate brands and embracing artisanal European houses.',
    author: 'Andrew Arbuthnot',
    date: 'December 2024',
    readTime: '7 min read',
    imageUrl: 'https://image2url.com/r2/default/images/1769356586139-84f6b0cf-2753-4f84-bdd5-ae768585c617.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "a2optics has transformed our premium eyewear offering. The brands they represent are exactly what our discerning clients are looking for.",
    author: "J.O.",
    practice: "Independent Optician, Dublin"
  },
  {
    quote: "Exceptional service and truly unique collections. Our customers love the exclusivity of the European houses Andrew brings to us.",
    author: "S.M.",
    practice: "Independent Optician, Belfast"
  }
];