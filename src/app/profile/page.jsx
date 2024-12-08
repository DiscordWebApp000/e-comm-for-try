'use client';
import React, { useState } from 'react';
import  Navbar from '@/components/Navbar';

const user = {
  name: 'Ahmet Yılmaz',
  email: 'ahmet@example.com',
  userType: 'seller', // 'user' or 'seller'
  paymentHistory: [
    { date: '2024-12-01', amount: 49.99, status: 'Başarılı' },
    { date: '2024-11-20', amount: 19.99, status: 'Başarılı' },
  ],
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode
  const [updatedInfo, setUpdatedInfo] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    address: user.address || '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to an API)
    console.log(updatedInfo);
    setEditMode(false); // Disable edit mode after submission
  };

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col lg:flex-row gap-6 text-black">
      {/* Dashboard Menü */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Dashboard</h2>
        <ul className="space-y-6">
          <li>
            <button
              onClick={() => handleTabChange('profile')}
              className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Profil Bilgileri
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange('payment')}
              className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeTab === 'payment' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Ödeme Geçmişi
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange('purchase')}
              className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeTab === 'purchase' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Satın Alma Geçmişi
            </button>
          </li>
          {user.userType === 'seller' && (
            <li>
              <button
                onClick={() => handleTabChange('createProduct')}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeTab === 'createProduct' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Ürün Oluştur
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Sağ Tarafta İçerik */}
      <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-6 ml-6 transition-all hover:shadow-xl">
        {/* Profil Bilgileri */}
        {activeTab === 'profile' && (
  <div className="space-y-8">
    <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Profil Bilgileri</h1>
    
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-600">Ad Soyad</p>
          <p className="text-lg font-medium text-gray-900">{user.name}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Email</p>
          <p className="text-lg font-medium text-gray-900">{user.email}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Telefon</p>
          <p className="text-lg font-medium text-gray-900">{user.phone || 'Telefon numarası yok'}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Adres</p>
          <p className="text-lg font-medium text-gray-900">{user.address || 'Adres bilgisi yok'}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Hesap Türü</p>
          <p className="text-lg font-medium text-gray-900">{user.userType === 'seller' ? 'Satıcı' : 'Normal Kullanıcı'}</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setEditMode(true)}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Profil Bilgilerini Güncelle
        </button>
      </div>

      {/* Editable Profile Form */}
      {editMode && (
        <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Ad Soyad</label>
            <input
              type="text"
              id="name"
              value={updatedInfo.name}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={updatedInfo.email}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">Telefon</label>
            <input
              type="text"
              id="phone"
              value={updatedInfo.phone}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-gray-600">Adres</label>
            <input
              type="text"
              id="address"
              value={updatedInfo.address}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, address: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Güncelle
          </button>
        </form>
      )}
    </div>
  </div>
)}


              {/* Ödeme Geçmişi */}
              {activeTab === 'payment' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Ödeme Geçmişi</h1>
              {user.paymentHistory && user.paymentHistory.length > 0 ? (
                <ul className="space-y-4">
                  {user.paymentHistory.map((payment, index) => (
                    <li key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
                      <p className="text-sm text-gray-600">Tarih: {payment.date}</p>
                      <p className="text-sm text-gray-600">Tutar: ${payment.amount}</p>
                      <p className="text-sm text-gray-600">Durum: {payment.status}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Henüz ödeme geçmişi bulunmamaktadır.</p>
              )}
            </div>
          )}
  
          {/* Satın Alma Geçmişi */}
          {activeTab === 'purchase' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Satın Alma Geçmişi</h1>
              <p className="text-gray-600">Burada kullanıcı satın alma geçmişi yer alacak.</p>
            </div>
          )}
  
         {/* Ürün Oluşturma (Sadece Satıcılar İçin) */}
          {activeTab === 'createProduct' && user.userType === 'seller' && (
          <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Ürün Oluştur</h1>
              <form className="space-y-6">
              {/* Ürün Adı */}
              <div>
                  <label htmlFor="productName" className="block text-sm text-gray-600">Ürün Adı</label>
                  <input
                  type="text"
                  id="productName"
                  placeholder="Ürün Adı"
                  className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
              </div>
  
              {/* Ürün Fiyatı */}
              <div>
                  <label htmlFor="price" className="block text-sm text-gray-600">Fiyat</label>
                  <input
                  type="number"
                  id="price"
                  placeholder="Ürün Fiyatı"
                  className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
              </div>
  
              {/* Ürün Açıklaması */}
              <div>
                  <label htmlFor="description" className="block text-sm text-gray-600">Açıklama</label>
                  <textarea
                  id="description"
                  placeholder="Ürün Açıklaması"
                  className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  rows="4"
                  />
              </div>
  
              {/* Ürün Kategorisi */}
              <div>
                  <label htmlFor="category" className="block text-sm text-gray-600">Kategori</label>
                  <select
                  id="category"
                  className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  >
                  <option value="">Kategori Seçin</option>
                  <option value="electronics">Elektronik</option>
                  <option value="clothing">Giyim</option>
                  <option value="accessories">Aksesuarlar</option>
                  <option value="homeGoods">Ev Eşyaları</option>
                  </select>
              </div>
  
              {/* Ürün Resmi */}
              <div>
                  <label htmlFor="productImage" className="block text-sm text-gray-600">Ürün Resmi</label>
                  <div className="w-full px-4 py-3 border rounded-md border-gray-300 flex justify-center items-center cursor-pointer">
                      <input
                      type="file"
                      id="productImage"
                      className="hidden"
                      />
                      <span className="text-gray-600">Resim Seç</span>
                  </div>
                  </div>
  
              {/* Ürün Ekle Butonu */}
              <button
                  type="submit"
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              >
                  Ürün Ekle
              </button>
              </form>
          </div>
  )}
      </div>
    </div>
    </>
  );
};

export default Profile;

