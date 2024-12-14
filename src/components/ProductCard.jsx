import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  // Shortening description and name
  const productDescription = product?.description || '';
  const shortenedDescription =
    productDescription.length > 30 ? productDescription.slice(0, 25) + '...' : productDescription;

  const productName = product?.name || '';
  const shortenedName =
    productName.length > 17 ? productName.slice(0, 17) + '...' : productName;

  // Rating from product
  const rating = product?.rating || 0;

  return (
    <div className="max-w-[250px] max-h-[520px] flex flex-col bg-white  rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-[1.01] m-4 p-5 border border-gray-100">
      <Link href={`/product/${product?.id}`} className="block">
        {/* Product Image */}
        {product?.imageUrl ? (
          <Image
            src={product?.imageUrl} 
            alt={product?.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        ) : (
          <div className=" h-64 bg-gray-300 rounded-md flex items-center justify-center mb-4">
            <span className="text-gray-600">Resim Bulunamadı</span>
          </div>
        )}

        {/* Product Information */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 truncate">{shortenedName}</h3>
          <p className="text-sm text-gray-500">{shortenedDescription}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={`star-${i}`}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < rating ? '#FFC107' : '#E0E0E0'}
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Price and Seller Information */}
        <div className="mt-3 flex flex-col justify-between ">
          <p className="text-lg font-semibold text-gray-900 w-[200px] text-left">${product?.price}</p>
          <div className="text-sm text-gray-500">
            <p>{product?.userName}</p>
            <p className="text-xs text-gray-400">{product?.createdAt}</p>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button className="w-full mt-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-colors ease-in-out duration-200">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
