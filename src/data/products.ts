export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  inStock: boolean;
  features: string[];
  brand: string;
}

export const products: Product[] = [
  // ELECTRONICS (8 products)
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 1247,
    description: 'Latest iPhone with titanium design and A17 Pro chip',
    inStock: true,
    features: ['A17 Pro chip', 'Titanium design', '48MP camera', 'USB-C'],
    brand: 'Apple'
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 892,
    description: 'Ultra-thin laptop with M2 chip and all-day battery',
    inStock: true,
    features: ['M2 chip', '13.6" display', '18-hour battery', 'MagSafe charging'],
    brand: 'Apple'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    price: 349.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 2156,
    description: 'Industry-leading noise cancellation headphones',
    inStock: true,
    features: ['30-hour battery', 'Multi-device pairing', 'Touch controls', 'Premium comfort'],
    brand: 'Sony'
  },
  {
    id: '4',
    name: 'Samsung 65" QLED 4K Smart TV',
    price: 1299.99,
    originalPrice: 1599.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 892,
    description: 'Quantum dot technology for stunning picture quality',
    inStock: true,
    features: ['4K resolution', 'HDR10+', 'Smart TV', 'Game Mode'],
    brand: 'Samsung'
  },
  {
    id: '5',
    name: 'PlayStation 5 Gaming Console',
    price: 499.99,
    originalPrice: 599.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 3421,
    description: 'Next-generation gaming with lightning-fast loading',
    inStock: true,
    features: ['4K gaming', 'Ray tracing', '3D audio', 'DualSense controller'],
    brand: 'Sony'
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    price: 399.99,
    originalPrice: 449.99,
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 1892,
    description: 'Advanced health monitoring and fitness tracking',
    inStock: true,
    features: ['Heart rate monitor', 'ECG', 'GPS', 'Water resistant'],
    brand: 'Apple'
  },
  {
    id: '7',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 892,
    description: 'Flagship Android phone with S Pen and AI features',
    inStock: true,
    features: ['200MP camera', 'S Pen', 'AI features', '5G'],
    brand: 'Samsung'
  },
  {
    id: '8',
    name: 'Philips Hue Smart Bulb Starter Kit',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 2341,
    description: 'Smart lighting system for your home',
    inStock: true,
    features: ['16 million colors', 'Voice control', 'Scheduling', 'Bridge included'],
    brand: 'Philips'
  },

  // FASHION & APPAREL (8 products)
  {
    id: '9',
    name: 'Nike Air Max 270 Running Shoes',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.6,
    reviewCount: 3421,
    description: 'Maximum comfort with Air Max technology',
    inStock: true,
    features: ['Air Max unit', 'Breathable mesh', 'Rubber outsole', 'Lightweight'],
    brand: 'Nike'
  },
  {
    id: '10',
    name: 'Levi\'s 501 Original Jeans',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.5,
    reviewCount: 2156,
    description: 'Classic straight-leg jeans with timeless style',
    inStock: true,
    features: ['100% cotton', 'Straight leg', 'Button fly', 'Classic fit'],
    brand: 'Levi\'s'
  },
  {
    id: '11',
    name: 'Adidas Ultraboost 22 Running Shoes',
    price: 179.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.7,
    reviewCount: 1892,
    description: 'Energy-returning boost technology for runners',
    inStock: true,
    features: ['Boost midsole', 'Primeknit upper', 'Continental rubber', 'Energy return'],
    brand: 'Adidas'
  },
  {
    id: '12',
    name: 'Ray-Ban Aviator Classic Sunglasses',
    price: 159.99,
    originalPrice: 189.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.8,
    reviewCount: 1247,
    description: 'Timeless aviator style with premium lenses',
    inStock: true,
    features: ['Gold frame', 'Green lenses', 'UV protection', 'Classic design'],
    brand: 'Ray-Ban'
  },
  {
    id: '13',
    name: 'The North Face Denali Jacket',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.6,
    reviewCount: 892,
    description: 'Fleece jacket perfect for outdoor adventures',
    inStock: true,
    features: ['Polartec fleece', 'Full-zip', 'Elastic cuffs', 'Two hand pockets'],
    brand: 'The North Face'
  },
  {
    id: '14',
    name: 'Converse Chuck Taylor All Star',
    price: 59.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.5,
    reviewCount: 4567,
    description: 'Iconic canvas sneakers with timeless appeal',
    inStock: true,
    features: ['Canvas upper', 'Rubber sole', 'Classic design', 'Versatile style'],
    brand: 'Converse'
  },
  {
    id: '15',
    name: 'Nike Dri-FIT Training Shirt',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.4,
    reviewCount: 1892,
    description: 'Moisture-wicking fabric for intense workouts',
    inStock: true,
    features: ['Dri-FIT technology', 'Breathable', 'Quick-dry', 'Comfortable fit'],
    brand: 'Nike'
  },
  {
    id: '16',
    name: 'Patagonia Down Sweater Jacket',
    price: 229.99,
    originalPrice: 279.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Fashion',
    rating: 4.7,
    reviewCount: 734,
    description: 'Lightweight down jacket for cold weather',
    inStock: true,
    features: ['800-fill down', 'Water-resistant', 'Packable', 'Durable shell'],
    brand: 'Patagonia'
  },

  // HOME & LIFESTYLE (4 products)
  {
    id: '17',
    name: 'Dyson V15 Detect Cordless Vacuum',
    price: 699.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Home',
    rating: 4.8,
    reviewCount: 1247,
    description: 'Laser technology reveals hidden dust and debris',
    inStock: true,
    features: ['Laser technology', '60-minute runtime', 'HEPA filtration', 'LCD screen'],
    brand: 'Dyson'
  },
  {
    id: '18',
    name: 'Instant Pot Duo 7-in-1',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Home',
    rating: 4.7,
    reviewCount: 4567,
    description: '7-in-1 electric pressure cooker for quick meals',
    inStock: true,
    features: ['7 cooking functions', '10 safety features', '6-quart capacity', 'Easy cleanup'],
    brand: 'Instant Pot'
  },
  {
    id: '19',
    name: 'Nest Learning Thermostat',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Home',
    rating: 4.8,
    reviewCount: 1892,
    description: 'Smart thermostat that learns your preferences',
    inStock: true,
    features: ['Learning capability', 'Energy saving', 'App control', 'Auto-schedule'],
    brand: 'Nest'
  },
  {
    id: '20',
    name: 'Bowflex SelectTech 552 Dumbbells',
    price: 429.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format&q=80',
    category: 'Home',
    rating: 4.6,
    reviewCount: 892,
    description: 'Adjustable dumbbells from 5 to 52.5 pounds',
    inStock: true,
    features: ['5-52.5 lbs', 'Dial system', 'Space saving', 'Durable construction'],
    brand: 'Bowflex'
  }
];

export const categories = [
  'Electronics',
  'Fashion', 
  'Home'
];
