import React from 'react';

const ProfileEditForm = ({ updatedInfo, setUpdatedInfo, handleSubmit }) => {
  return (
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
  );
};

export default ProfileEditForm;
