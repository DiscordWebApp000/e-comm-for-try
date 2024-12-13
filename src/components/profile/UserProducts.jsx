'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { fetchUserProducts, updateUserProduct, deleteUserProduct } from '@/redux/userProducts/userProductsActions';

const UserProducts = ({ token }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.userProducts);
  console.log(products);

  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    price: '',
    description: '',
    file: null,
  });

  useEffect(() => {
    dispatch(fetchUserProducts(token));
  }, [dispatch]);

  const handleEditClick = (product) => {
    setEditingProduct(product.id);
    setUpdatedData({
      name: product.name,
      price: product.price,
      description: product.description || '',
      file: null,
    });
  };
  const handleUpdate = (e, productId) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', updatedData.name);
    formData.append('price', updatedData.price);
    formData.append('description', updatedData.description);
    if (updatedData.file) {
      formData.append('file', updatedData.file);
    }

    // Update product
    dispatch(updateUserProduct(productId, formData, token))
      .then(() => {
        // After updating, fetch the latest products
        dispatch(fetchUserProducts(token));
        setEditingProduct(null);
      })
      .catch((err) => console.error("Error updating product", err));
  };

  const handleDelete = (productId) => {
    if (window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
      // Delete product
      dispatch(deleteUserProduct(token, productId))
        .then(() => {
          // After deleting, fetch the latest products
          dispatch(fetchUserProducts(token));
        })
        .catch((err) => console.error("Error deleting product", err));
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Ürünlerim</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={`${product.id}`}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-md space-y-4 md:space-y-0"
          >
            {editingProduct === product.id ? ( // Sadece tıklanan ürün için düzenleme modunu kontrol et
              <form
                onSubmit={(e) => handleUpdate(e, product.id)}
                className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
              >
                <input
                  type="text"
                  value={updatedData.name}
                  onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
                  placeholder="Ürün Adı"
                  className="border p-2 rounded-md"
                />
                <input
                  type="number"
                  value={updatedData.price}
                  onChange={(e) => setUpdatedData({ ...updatedData, price: e.target.value })}
                  placeholder="Ürün Fiyatı"
                  className="border p-2 rounded-md"
                />
                <textarea
                  value={updatedData.description}
                  onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
                  placeholder="Ürün Açıklaması"
                  className="border p-2 rounded-md"
                />
                <input
                  type="file"
                  onChange={(e) => setUpdatedData({ ...updatedData, file: e.target.files[0] })}
                  className="border p-2 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Kaydet
                </button>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  İptal
                </button>
              </form>
            ) : (
              <>
                <span><Image src={product.imageUrl} alt={product.name} width={100} height={100} /></span>
                <span className="text-lg font-medium text-gray-900">{product.name}</span>
                <span className="text-lg font-medium text-gray-700">{product.price}₺</span>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Sil
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProducts;
