import React from 'react';

const ProfileDetails = ({ user, setEditMode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-600">Ad Soyad</p>
          <p className="text-lg font-medium text-gray-900">{user?.unique_name}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Email</p>
          <p className="text-lg font-medium text-gray-900">{user?.email}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Telefon</p>
          <p className="text-lg font-medium text-gray-900">{user?.phone || 'Telefon numarası yok'}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Adres</p>
          <p className="text-lg font-medium text-gray-900">{user?.address || 'Adres bilgisi yok'}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Hesap Türü</p>
          <p className="text-lg font-medium text-gray-900">
            {user?.userRole === 'CUSTOMER' ?  'Normal Kullanıcı' : 'Satıcı' }
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setEditMode(true)}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Profil Bilgilerini Güncelle
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
