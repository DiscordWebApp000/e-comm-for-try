'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; 
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import ProductCard from '@/components/ProductCard'; 
import { fetchProductsData } from '@/redux/products/productActions';
import { checkAuthToken } from '@/redux/auth/authActions';


const ProductsPage = () => {
  const { products: Products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  const searchParams = useSearchParams();

   useEffect(() => {
        dispatch(checkAuthToken());
      }, []);

  // Get URL parameters and set filter accordingly
  useEffect(() => {
    const sort = searchParams.get('sort');
    if (sort) {
      setFilter(sort);
    }
    dispatch(fetchProductsData());
  }, [searchParams, dispatch]);

  // Function to sort products by price
  const sortedProducts = () => {
    let sortedArray = [...Products];
    if (filter === 'low-to-high') {
      sortedArray = sortedArray.sort((a, b) => a.price - b.price);
    } else if (filter === 'high-to-low') {
      sortedArray = sortedArray.sort((a, b) => b.price - a.price);
    }
    return sortedArray;
  };

  // Update the filter and URL
  const handleFilter = (value) => {
    setFilter(value);
    window.history.pushState(null, '', `?sort=${value}`);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap pt-10 max-w-[1440px] mx-auto justify-center">
        {/* Filter Section */}
        <aside className="w-full lg:w-1/4 px-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter</h2>
          <div className="flex flex-col gap-4">
            <label htmlFor="price-filter" className="text-sm font-medium text-gray-700">
              Price Filter
            </label>
            <select
              id="price-filter"
              onChange={(e) => handleFilter(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              value={filter}
            >
              <option value="">Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </aside>
  
        {/* Product List */}
        <main className="w-full min-h-screen lg:w-3/4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : Products.length === 0 ? (
            <p className="text-center text-gray-500">No products found</p>
          ) : (
            <>
              {sortedProducts().map((product) => (
                <ProductCard key={`${product.id}`} product={product} />
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
