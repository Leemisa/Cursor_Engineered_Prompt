import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Show all 20 products instead of just 8
  const allProducts = products;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-responsive py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Discover Amazing Products
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Shop the latest trends with premium quality and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/products"
                  className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
                >
                  View Categories
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛍️</div>
                  <h3 className="text-2xl font-semibold mb-2">Premium Shopping</h3>
                  <p className="text-primary-100">Experience the best in online retail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Curated selection of top products</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Products ({allProducts.length})</h2>
            <Link
              to="/products"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">Get the latest deals and product updates</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 px-6 py-2 rounded-r-lg hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;