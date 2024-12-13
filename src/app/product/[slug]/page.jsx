'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "@/redux/productDetails/productDetailsActions";
import { addRating } from "@/redux/ratings/ratingsActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { checkAuthToken } from '@/redux/auth/authActions';


const ProductPage = ({ params }) => {
  const dispatch = useDispatch();

  const { slug } = React.use(params);

   useEffect(() => {
        dispatch(checkAuthToken());
      }, []);

  // Redux state selectors
  const { product, error: productError } = useSelector((state) => state.productDetails);
  const { token } = useSelector((state) => state.auth);

  const [userRating, setUserRating] = useState(0); 
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductDetails(slug));
    }
  }, [slug, dispatch]);

  const handleRatingChange = (event) => {
    setUserRating(event.target.value);
  };

  const handleSubmitRating = () => {
    if (token && userRating > 0) {
      const ratingData = {
        ProductId: slug,  
        rating: userRating  
      };
  
      dispatch(addRating(ratingData, token)); 
      setRatingSubmitted(true); 
    } else {
      alert("Please log in to submit a rating!");
    }
  };

  if (productError) {
    return <div className="text-red-500">Error fetching product details: {productError}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 h-screen" >
      
      {/* Product Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <Image src={product.imageUrl} alt={product.name} width={300} height={300} className=" rounded-lg shadow-lg object-cover" />
      </div>

      {/* Product Details Section */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-md bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
        <p className="text-lg text-gray-700 mt-4">{product.description}</p>
        <p className="text-xl font-bold text-gray-900 mt-6">${product.price}</p>
        <p className="text-lg text-yellow-500 mt-2">Rating: {product.rating}</p>

        {/* Add to Cart Button */}
        <div className="mt-6">
          <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
            Add to Cart
          </button>
        </div>

        {/* Rating Section */}
        <div className="mt-8">
          {token ? (
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <label htmlFor="rating" className="block text-lg font-medium text-gray-700">
                Add your rating:
              </label>
              <input
                type="number"
                id="rating"
                value={userRating}
                onChange={handleRatingChange}
                min="1"
                max="5"
                className="mt-2 w-full p-3 border-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSubmitRating}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Submit Rating
              </button>
              {ratingSubmitted && <p className="mt-2 text-green-600">Thank you for your rating!</p>}
            </div>
          ) : (
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">You need to log in to submit a rating</p>
              <button className="mt-4 w-full bg-gray-300 text-gray-600 py-2 rounded-md cursor-not-allowed" disabled>
                Log in to rate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;
