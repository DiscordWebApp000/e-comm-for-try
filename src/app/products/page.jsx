"use client";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import ProductCard from '@/components/ProductCard'; 
import { fetchProductsData } from '@/redux/products/productActions';
import { checkAuthToken } from '@/redux/auth/authActions';

const ProductsPage = () => {
  // Access products data, loading state, and error from Redux store
  const { products: Products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [priceFilter, setPriceFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');
  const searchParams = useSearchParams(); 

  // Verify user authentication on component mount
  useEffect(() => {
    dispatch(checkAuthToken());
  }, []);

  // Get URL parameters and set filters accordingly
  useEffect(() => {
    const sortPrice = searchParams.get('priceSort'); 
    const sortRate = searchParams.get('rateSort'); 
    if (sortPrice) setPriceFilter(sortPrice); 
    if (sortRate) setRateFilter(sortRate);  
    dispatch(fetchProductsData()); 
  }, [searchParams, dispatch]);

  // Function to sort products based on selected filters
  const sortedProducts = () => {
    let sortedArray = [...Products];

    // Sort by price (ascending or descending)
    if (priceFilter === 'low-to-high') {
      sortedArray = sortedArray.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'high-to-low') {
      sortedArray = sortedArray.sort((a, b) => b.price - a.price);
    }

    // Sort by rating (ascending or descending)
    if (rateFilter === 'low-to-high') {
      sortedArray = sortedArray.sort((a, b) => a.rating - b.rating);
    } else if (rateFilter === 'high-to-low') {
      sortedArray = sortedArray.sort((a, b) => b.rating - a.rating);
    }

    return sortedArray; 
  };

  // Update price filter and URL query parameters
  const handlePriceFilter = (value) => {
    setPriceFilter(value);
    const urlParams = new URLSearchParams(); 
    if (value) urlParams.set('priceSort', value); 
    if (rateFilter) urlParams.set('rateSort', rateFilter);
    window.history.pushState(null, '', `?${urlParams.toString()}`);
  };

  // Update rate filter and URL query parameters
  const handleRateFilter = (value) => {
    setRateFilter(value);
    const urlParams = new URLSearchParams();
    if (priceFilter) urlParams.set('priceSort', priceFilter);
    if (value) urlParams.set('rateSort', value); 
    window.history.pushState(null, '', `?${urlParams.toString()}`);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap pt-10 max-w-[1440px] mx-auto justify-center">
        {/* Filter Section */}
        <aside className="w-full lg:w-1/4 px-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter</h2>
          <div className="flex flex-col gap-4">
            {/* Price Filter */}
            <label htmlFor="price-filter" className="text-sm font-medium text-gray-700">
              Price Filter
            </label>
            <select
              id="price-filter"
              onChange={(e) => handlePriceFilter(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              value={priceFilter}
            >
              <option value="">Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>

            {/* Rate Filter */}
            <label htmlFor="rate-filter" className="text-sm font-medium text-gray-700">
              Rate Filter
            </label>
            <select
              id="rate-filter"
              onChange={(e) => handleRateFilter(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              value={rateFilter}
            >
              <option value="">Default</option>
              <option value="low-to-high">Rate: Low to High</option>
              <option value="high-to-low">Rate: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Product List */}
        <main className="w-full min-h-screen lg:w-3/4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p> // Display loading message
          ) : Products.length === 0 ? (
            <p className="text-center text-gray-500">No products found</p> // Show message if no products are available
          ) : (
            <>
              {sortedProducts().map((product) => (
                <ProductCard key={`${product.id}`} product={product} /> // Render product cards
              ))}
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
