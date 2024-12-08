import Navbar from "@/components/Navbar";
import Image from "next/image";
const ProductDetail = ({ params }) => {
  const { slug } = params;

  // Simulated product data
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
  
  

  const product = products.find((p) => p.id.toString() === slug);

  if (!product) {
    return <div className="text-center py-10">Product not found!</div>;
  }

  const buyerComments = [
    { id: 1, name: 'User1', comment: 'Great product!', rating: 5 },
    { id: 2, name: 'User2', comment: 'Good quality.', rating: 4 },
  ];

  return (
    <div >
      <Navbar />
      <div className="w-full min-h-screen bg-gray-50 py-10 px-6">
        {/* Product Box */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section: Product Image */}
          <div className="flex justify-center items-center w-[300px] h-[300px] overflow-hidden rounded-lg">
          <Image src={product.image} alt={product.name} width={250}  height={250}  className="rounded-lg"/>
          </div>
          {/* Middle Section: Product Details */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <p className="mt-4 text-lg text-gray-800 font-semibold">Price: ${product.price}</p>
              <p className="mt-2 text-yellow-500 font-medium">
                Average Rating: {product.rating} ⭐
              </p>
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition">
              Add to Cart
            </button>
          </div>

          {/* Right Section: Seller Info */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-900">Seller: {product.seller}</h2>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Follow Seller
            </button>
            <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
              Visit Seller's Store
            </button>
          </div>
        </div>

        {/* Comment Section */}
        <div className="max-w-6xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Leave a Comment</h3>
          <textarea
            className="w-full mt-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your comment here..."
          ></textarea>
          <button className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
            Submit Comment
          </button>
        </div>

        {/* Buyer Comments */}
        <div className="max-w-6xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Buyer Comments</h3>
          <div className="mt-4 space-y-4">
            {buyerComments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-300 pb-4">
                <p className="font-medium text-gray-800">{comment.name}</p>
                <p className="text-gray-600">{comment.comment}</p>
                <p className="text-yellow-500">{comment.rating} ⭐</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
