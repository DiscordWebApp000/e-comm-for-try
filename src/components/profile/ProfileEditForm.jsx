import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '@/redux/auth/authActions';

const ProfileEditForm = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  // Get user and token information from Redux store
  const { user, token, isLoading: loading, error } = useSelector((state) => state.auth);

  const userId = user?.sub;

  // Form state
  const [data, setData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    password: '',
    role: user?.role || 'CUSTOMER',
  });

  // Sync form data with user data when user changes
  useEffect(() => {
    if (user) {
      setData({
        username: user.username || '',
        email: user.email || '',
        password: '',
        role: user.role || 'CUSTOMER',
      });
    }
  }, [user]);

  // Handle form submission for updating user profile
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId || !token) {
      console.error('User ID or token is missing');
      return;
    }

    dispatch(updateUser(userId, data, token))
      .then(() => {
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 2000);
      })
      .catch((err) => {
        setMessage(`An error occurred: ${err.message || 'Unknown error'}`);
      });
  };

  return (
    <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {message && (
        <div className={`p-4 rounded-lg mb-4 ${error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <p>{message}</p>
        </div>
      )}

      {/* Username Field */}
      <div>
        <label htmlFor="username" className="block text-sm font-semibold text-gray-600">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="Leave blank to keep current password"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Role Field */}
      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-gray-600">
          Role
        </label>
        <select
          id="role"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="CUSTOMER">Customer</option>
          <option value="ADMIN">Seller</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {loading ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
};

export default ProfileEditForm;
