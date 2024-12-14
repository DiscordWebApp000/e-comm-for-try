'use client';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// User Registration
export const registerAPI = (data) => {
  return axios.post(`${API_URL}/Auth/register`, data);
};

// User Login
export const loginAPI = (data) => {
  return axios.post(`${API_URL}/Auth/login`, data);
};

// Fetch Products
export const fetchProductsAPI = () => {
  return axios.get(`${API_URL}/Product`);
};

// Update User Information
export const updateUserAPI = async (userId, data, token) => {
  return axios.put(`${API_URL}/user/update/${userId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Add Product
export const createProductAPI = (data, token) => {
  return axios.post(
    `${API_URL}/Product`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Adding JWT Token
      },
    }
  );
};

// Fetch Product Details
export const fetchProductDetailsAPI = (productId) => {
  return axios.get(`${API_URL}/Product/${productId}`);
};

// Fetch Average Rating for a Specific Product
export const fetchAverageRatingAPI = (productId) => {
  return axios.get(`${API_URL}/Product/${productId}/rating`);
};

// Add Rating for a Specific Product
export const addRatingAPI = (ratingData, token) => {
  return axios.post(
    `${API_URL}/Product/rate`,
    ratingData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Adding JWT Token
      },
    }
  );
};

// Fetch User's Products
export const fetchUserProductsAPI = async (token) => {
  return axios.get(`${API_URL}/Product/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Update a Product
export const updateProductAPI = async (productId, data, token) => {
  return axios.put(`${API_URL}/Product/${productId}`,
    data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Delete a Product
export const deleteProductAPI = async (token, productId) => {
  console.log(productId, token);
  return axios.delete(`${API_URL}/Product/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
