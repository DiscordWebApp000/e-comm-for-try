'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import HomeNewsCard from '@/components/HomeNewsCard';
import Offers from '@/components/Offers';
import { fetchProductsData } from '@/redux/products/productActions'; 
import { checkAuthToken } from '@/redux/auth/authActions';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { products: Products, loading, error } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth); 

  useEffect(() => {
    // Fetch products and check authentication status
    dispatch(fetchProductsData());
    dispatch(checkAuthToken());

  }, []); 

  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <main className="container mx-auto px-4 py-8 min-h-screen">
          <Offers />
          <HomeNewsCard />
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Öne Çıkan Ürünler
          </h1>
          {loading ? (
            <p className="text-center">Ürünler yükleniyor...</p>
          ) : error ? (
            <p className="text-center text-red-500">{`Hata: ${error}`}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
              {Products.map((product) => (
                <ProductCard key={`${product.id}`} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
