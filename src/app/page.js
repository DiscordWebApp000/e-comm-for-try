// src/app/home/page.jsx
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const Home = () => {
  // Simulated product data (this could be fetched from an API)
  const products = [
    {
      id: 1,
      name: 'Kışlık Şişme Mont',
      price: 29.99,
      image: '/images/product1.png',
      description: 'Şık ve rahat bir mont, kış günleri için ideal.',
      rating: 4, // Rating out of 5 stars
      date: '2024-12-01', // Satış tarihi
      seller: 'Moda Dünyası', // Satıcı ismi
    },
    {
      id: 2,
      name: 'Su Geçirmez Mont',
      price: 49.99,
      image: '/images/product2.png',
      description: 'Yağmurlu günler için tasarlanmış su geçirmez mont.',
      rating: 5,
      date: '2024-11-28',
      seller: 'Outdoor Shop',
    },
    {
      id: 3,
      name: 'Polar Astar Detaylı Mont',
      price: 19.99,
      image: '/images/product3.png',
      description: 'Soğuk havalarda sizi sıcak tutacak polar detaylı mont.',
      rating: 3,
      date: '2024-12-05',
      seller: 'Kış Modası',
    },
    {
      id: 4,
      name: 'Uzun Yünlü Palto',
      price: 39.99,
      image: '/images/product4.png',
      description: 'Klasik tasarımı ve kaliteli kumaşıyla dikkat çeken palto.',
      rating: 4,
      date: '2024-12-03',
      seller: 'Luxury Giyim',
    },
    {
      id: 5,
      name: 'Yünlü Hırka',
      price: 24.99,
      image: '/images/product5.png',
      description: 'Sıcak tutan yünlü hırka, her ortamda şıklığınızı artırır.',
      rating: 4.5,
      date: '2024-11-15',
      seller: 'Şık Giyim',
    },
    {
      id: 6,
      name: 'Rüzgar Geçirmez Mont',
      price: 34.99,
      image: '/images/product6.png',
      description: 'Rüzgar geçirmeyen, suya dayanıklı mont, kış koşullarına uygun.',
      rating: 4.2,
      date: '2024-12-02',
      seller: 'Aktif Giyim',
    },
  ];
  
  
  
  

  return (
    
    <div className="bg-gray-100 text-gray-900 ">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Öne Çıkan Ürünler
        </h1>
        <div className=" flex flex-col items-center justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
