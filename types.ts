
export interface Brand {
  name: string;
  origin: string;
  tagline: string;
  description: string;
  catalogueLink: string;
  imageUrl: string;
  keywords: string[];
}

export interface Post {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  practice: string;
}
