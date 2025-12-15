import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SearchResultsPage from './pages/SearchResultsPage';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <CartProvider>
          <SearchProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductListingPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/search" element={<SearchResultsPage />} />
              </Routes>
            </Layout>
          </SearchProvider>
        </CartProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
