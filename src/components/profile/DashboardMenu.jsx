import React from 'react';

const DashboardMenu = ({ activeTab, handleTabChange, user }) => {
  return (
    <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl flex flex-col justify-between">
      <ul className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Dashboard</h2>
        <li>
          <button
            onClick={() => handleTabChange('profile')}
            className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            Profil Bilgileri
          </button>
        </li>
        {user?.userRole === 'ADMIN' && (
          <li>
            <button
              onClick={() => handleTabChange('UserProducts')}
              className={`w-full text-left px-4 py-3 rounded-md transition-colors ${activeTab === 'UserProducts' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Ürünleriniz
            </button>
          </li>
        )} 
        
         {user?.userRole === 'ADMIN' && (
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
  );
};

export default DashboardMenu;
