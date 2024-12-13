'use client';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Kullanıcı Kaydı
export const registerAPI = (data) => {
  return axios.post(`${API_URL}/Auth/register`, data);
};

// Kullanıcı Girişi
export const loginAPI = (data) => {
  return axios.post(`${API_URL}/Auth/login`, data);
};

// Ürünleri Getirme
export const fetchProductsAPI = () => {
  return axios.get(`${API_URL}/Product`);
};

// Ürün Ekleme
export const createProductAPI = (data, token) => {
  return axios.post(
    `${API_URL}/Product`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`, // JWT Token ekleniyor
      },
    }
  );
};

// Ürün Detaylarını Getirme
export const fetchProductDetailsAPI = (productId) => {
  return axios.get(`${API_URL}/Product/${productId}`);
};

// Belirli Bir Ürüne Ortalama Puanı Getirme
export const fetchAverageRatingAPI = (productId) => {
  return axios.get(`${API_URL}/Product/${productId}/rating`);
};

// Belirli Bir Ürüne Rating Ekleme
export const addRatingAPI = ( ratingData, token) => {
  return axios.post(
    `${API_URL}/Product/rate`,
    ratingData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // JWT Token ekleniyor
      },
    }
  );
};

// Fetch user's products
export const fetchUserProductsAPI = async (token) => {
  return axios.get(`${API_URL}/Product/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Update a product
export const updateProductAPI = async ( productId , data, token) => {
  return axios.put(`${API_URL}/Product/${productId}`,
     data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Delete a product
export const deleteProductAPI = async (token ,productId) => {
  console.log(productId, token );   
  return axios.delete(`${API_URL}/Product/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
