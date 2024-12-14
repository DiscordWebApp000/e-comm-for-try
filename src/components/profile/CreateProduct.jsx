import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '@/redux/products/productActions';

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  // Storing form data in state
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(''); 

  // Function to be called when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    const allowedFormats = ['image/png', 'image/jpg', 'image/jpeg'];

    if (file && !allowedFormats.includes(file.type)) {
      alert('Please upload a file in PNG, JPG, or JPEG format.');
      return;
    }

    // Creating a FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('file', file);
    formData.append('description', description);

    await dispatch(createProduct(formData));

    // Reset the form
    setName('');
    setPrice('');
    setFile(null);
    setDescription('');

    if (error) {
      setMessage(`An error occurred while creating the product: ${error}`);
    }

    else if (products.length > 0) {
      setMessage('Product created successfully!');

      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Product</h2>

      {message && (
        <div className={`p-4 rounded-lg mb-4 ${error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <p>{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-blue-600 text-white rounded-md ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Loading...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
