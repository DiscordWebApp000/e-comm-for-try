import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '@/redux/products/productActions';

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  // Form verilerini state'de tutuyoruz
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(''); // For general message (success or error)

  // Form gönderildiğinde çağrılacak işlev
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Desteklenen dosya formatları
    const allowedFormats = ['image/png', 'image/jpg', 'image/jpeg'];

    // Eğer resim eklenmişse formatı kontrol et
    if (file && !allowedFormats.includes(file.type)) {
      alert('Lütfen sadece PNG, JPG veya JPEG formatında bir dosya yükleyin.');
      return;
    }

    // FormData nesnesi oluşturuyoruz
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('file', file);
    formData.append('description', description);

    await dispatch(createProduct(formData));

    // Formu sıfırlıyoruz
    setName('');
    setPrice('');
    setFile(null);
    setDescription('');

    if (error) {
      setMessage(`Ürün oluşturulurken bir hata oluştu: ${error}`);
    }

    else if (products.length > 0) {
      setMessage('Ürün başarıyla oluşturuldu!');

      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  };


  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Yeni Ürün Oluştur</h2>

      {message && (
        <div className={`p-4 rounded-lg mb-4 ${error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <p>{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Ürün Adı */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Ürün Adı
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

        {/* Fiyat */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Fiyat
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

        {/* Resim */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Resim
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Açıklama */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Açıklama
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Butonu */}
        <div className="mb-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-blue-600 text-white rounded-md ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Yükleniyor...' : 'Ürünü Oluştur'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
