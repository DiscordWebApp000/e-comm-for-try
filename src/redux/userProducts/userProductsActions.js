import { fetchUserProductsAPI, updateProductAPI, deleteProductAPI } from '@/utils/api';

export const fetchUserProducts = (userId , token) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_PRODUCTS_START' });
    try {
      const response = await fetchUserProductsAPI(userId , token);
      dispatch({ type: 'FETCH_USER_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_PRODUCTS_FAILURE', payload: error.message });
    }
  };
};

export const updateUserProduct = (productId, productData, token) => {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_USER_PRODUCT_START', payload: productId });
    try {
      const response = await updateProductAPI(productId, productData, token);
      dispatch({ type: 'UPDATE_USER_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'UPDATE_USER_PRODUCT_FAILURE', payload: error.message });
    }
  };
};

export const deleteUserProduct = (productId, token) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_USER_PRODUCT_START', payload: productId });
    try {
      await deleteProductAPI(productId, token);
      dispatch({ type: 'DELETE_USER_PRODUCT_SUCCESS', payload: productId });
    } catch (error) {
      dispatch({ type: 'DELETE_USER_PRODUCT_FAILURE', payload: error.message });
    }
  };
};
