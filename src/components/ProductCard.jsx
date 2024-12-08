import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  // Açıklamayı 30 karakterle kısalt
  const description = product.description || ''; // Açıklama yoksa varsayılan boş string
  const truncatedDescription =
    description.length > 30 ? description.slice(0, 30) + '...' : description;

  // Yıldız derecelendirmesi oluşturma fonksiyonu
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? 'gold' : 'gray'}
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path d="M12 17.77l5.19 3.02-1.39-6.06L22 9.24l-6.19-.54L12 2 8.19 8.7 2 9.24l5.19 5.49-1.39 6.06L12 17.77z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center w-72 lg:max-w-72 m-1 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all">
      <Link href={`/product/${product.id}`} className="block">
        {/* Ürün Görseli */}
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-80 object-cover rounded-t-lg"
        />

        {/* Ürün Bilgileri */}
        <div className="mt-2">
          
          <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{truncatedDescription}</p>
        </div>

        {/* Derecelendirme */}
        <div className="flex items-center mt-2">
          {generateStars(product.rating).map((star, index) => (
            <span key={index} className="mr-1">
              {star}
            </span>
          ))}
        </div>

        {/* Fiyat */}
        <p className="text-sm text-gray-500 font-semibold mt-1">
          ${product.price}
        </p>

        <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">{product.seller}</span>
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">{product.date}</span>
          </p>
      </Link>

      {/* Sepete Ekle Butonu */}
      <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
