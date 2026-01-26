
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
    imageUrl: 'https://image2url.com/r2/default/images/1769357862817-124c0976-3eb6-4a14-afc8-1d200524e42d.jpg',
    content: [
      "In the heart of the Austrian Alps, far removed from the mass-production hubs of East Asia, a quiet revolution is taking place. It is here, in the Tyrol region, that Rolf Spectacles has established a philosophy that challenges the very definition of luxury eyewear. For decades, 'luxury' in optics meant precious metals, heavy branding, and synthetic acetates. Rolf suggests a different path: one paved with wood, stone, and beans.",
      "The Rolf approach is not merely about materials; it is about engineering. Creating a frame from wood that is durable enough for daily clinical wear requires a complete rethinking of the hinge. Traditional screws and soldering do not work with organic substrates. The result is their patented screwless hinge design, a marvel of mechanical simplicity that ensures longevity without compromising the integrity of the natural material.",
      "But perhaps their most significant recent innovation is the 'Substance' collection, derived from the castor bean. This isn't just a nod to sustainability; it's a high-performance material that offers incredible flexibility, lightness, and hypoallergenic properties. For the independent optician in Ireland, this offers a unique narrative: a frame that is grown, not mined or synthesized.",
      "Bringing Rolf into a practice is a statement. It tells the patient that their eyewear provider values provenance as much as prescription. It aligns the optical practice with the broader consumer shift towards responsible luxury—products that have a story, a soul, and a minimal footprint on the natural world from which they came."
    ]
  },
  {
    id: '2',
    category: 'Design Intelligence',
    title: "Barcelona’s Eyewear Revolution: Architecture on the Face",
    excerpt: 'Exploring the intersection of Mediterranean light and sculptural form in the latest collections from Le Parc and Kaleos.',
    author: 'Andrew Arbuthnot',
    date: 'January 2025',
    readTime: '5 min read',
    imageUrl: 'https://image2url.com/r2/default/images/1769356891788-4a0ce649-f1af-415c-8a29-c42c55805bb1.png',
    content: [
      "Barcelona has always been a city where boundaries between disciplines blur. Gaudi turned architecture into sculpture; Miró turned painting into poetry. It is no surprise, then, that the city has become a breeding ground for some of Europe's most exciting eyewear design houses.",
      "Le Parc and Kaleos represent two sides of this avant-garde coin. Le Parc approaches the frame with the eye of a structural engineer. Their designs are characterized by bold, architectural lines that don't just sit on the face—they interact with it. The interplay of light and shadow on their bevelled acetates mimics the sun hitting the facades of the Eixample district.",
      "Kaleos, conversely, brings the energy of the runway to the optical shelf. Their philosophy is one of constant reinvention. If eyewear is the first thing people see when they look at you, they argue, it should be the most expressive item you wear. Their collections challenge the wearer to step out of the 'safe' zone of rectangular tortoiseshells and embrace oversized geometries and unexpected colour palettes.",
      "For the Irish optician, these brands offer a crucial differentiator. In a market often saturated with safe, commercial designs, Barcelona's output provides the 'wow' factor. They are conversation starters. They appeal to the client who sees their glasses not just as a medical necessity, but as a key component of their personal identity."
    ]
  },
  {
    id: '3',
    category: 'Retail Strategy',
    title: 'The Independent Edge: Curating Character in a Mass-Market World',
    excerpt: 'Why independent opticians are finding success by moving away from conglomerate brands and embracing artisanal European houses.',
    author: 'Andrew Arbuthnot',
    date: 'December 2024',
    readTime: '7 min read',
    imageUrl: 'https://image2url.com/r2/default/images/1769356586139-84f6b0cf-2753-4f84-bdd5-ae768585c617.png',
    content: [
      "The landscape of optical retail in Ireland is shifting. The high street is increasingly dominated by large multiples and online giants competing almost exclusively on price and speed. For the independent practice, trying to win this war is a strategic dead end. The path to long-term viability and profitability lies not in competing on their terms, but in rewriting the rules entirely.",
      "The 'Independent Edge' is defined by curation. It is the ability to offer a patient something they cannot find on every other corner. When a practice stocks the same brands as the major chains, they invite direct price comparison. When they stock exclusive, independent European houses, they remove the possibility of comparison altogether.",
      "This strategy does more than just protect margin; it elevates the patient experience. The dispensing process transforms from a transaction into a consultation. You are no longer selling a 'product'; you are introducing a piece of craftsmanship. You are telling the story of an Austrian workshop or a Californian studio. This narrative adds value that cannot be undercut by a discount code.",
      "At a2optics, we see this daily. Practices that pivot toward a curated portfolio of independent brands report higher average dispensing values, but more importantly, they report higher patient loyalty. Clients return not because it's cheap, but because they trust the optician's taste and expertise to find them something truly special."
    ]
  },
  {
    id: '4',
    category: 'Brand Spotlight',
    title: 'Raen: The Modern Classic from the California Coast',
    excerpt: 'Bridging the gap between surf culture and high-end optics, Raen proves that handmade quality is accessible, wearable, and timeless.',
    author: 'Andrew Arbuthnot',
    date: 'November 2024',
    readTime: '4 min read',
    imageUrl: 'https://image2url.com/r2/default/images/1769356550077-3c94a321-c0f5-4c38-8449-0b6b121d0fce.png',
    content: [
      "There is a specific aesthetic that comes from the California coast—a laid-back sophistication that feels effortless yet meticulously put together. Raen has bottled this essence and poured it into some of the finest acetate frames available on the market today.",
      "While Raen's roots are in the surf culture of Oceanside, their manufacturing standards rival the old houses of Europe. Every frame is hand-polished, a labour-intensive process that results in a lustre and finish that injection-moulded frames simply cannot replicate. They use high-grade zyl acetates that offer deep, rich colours and durability.",
      "What makes Raen particularly valuable for the independent practice is their accessibility. They offer a 'Modern Classic' design language. These are not intimidating frames. They take familiar silhouettes—the wayfarer, the teashade, the cat-eye—and refine them with modern geometry and superior materials. It is the perfect entry point for a patient looking to upgrade from mass-market brands to true independent eyewear without making a radical stylistic leap.",
      "Raen proves that 'handmade' and 'independent' doesn't have to mean 'niche' or 'avant-garde'. It can simply mean better. Better fit, better finish, and a better feeling when you put them on. For the Irish market, where there is a strong appreciation for quality without pretension, Raen is often the perfect fit."
    ]
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
