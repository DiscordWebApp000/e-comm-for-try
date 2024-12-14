'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { LuLogOut } from 'react-icons/lu';
import { logout } from '@/redux/auth/authActions';
import { CreateProduct, ProfileDetails, ProfileEditForm,  DashboardMenu , UserProducts } from '@/components/profile';
import { getToken } from '@/utils/auth'; 
import { checkAuthToken } from '@/redux/auth/authActions';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); 
  const token = getToken(); 

  // useEffect to check if the user is authenticated when the component is mounted
  useEffect(() => {
    dispatch(checkAuthToken());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout()); 
  };

  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false); 
  const [updatedInfo, setUpdatedInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });

  // Handle tab change when the user clicks on a tab
  const handleTabChange = (tab) => {
    setActiveTab(tab); 
  };

  // Handle form submission when updating profile information
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(updatedInfo); 
    setEditMode(false); 
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col lg:flex-row gap-6 text-black">
        <DashboardMenu activeTab={activeTab} handleTabChange={handleTabChange} user={user} />

        <div className="flex-1 space-y-6">
          <div className="text-right">
            <button onClick={handleLogout} className="text-xl text-red-600">
              <LuLogOut />
            </button>
          </div>

          {activeTab === 'profile' && (editMode ? (
            <ProfileEditForm updatedInfo={updatedInfo} setUpdatedInfo={setUpdatedInfo} handleSubmit={handleSubmit} />
          ) : (
            <ProfileDetails user={user} setEditMode={setEditMode} />
          ))}

          {activeTab === 'UserProducts' && <UserProducts userId={user?.sub} token={token} />} 
          {activeTab === 'createProduct' && <CreateProduct />} 
        </div>
      </div>
    </>
  );
};

export default Profile;
