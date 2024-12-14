import { fetchProductsAPI, createProductAPI } from '@/utils/api';
import { getToken } from '@/utils/auth';

export const fetchProductsData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_START' });
    try {
      const response = await fetchProductsAPI();
      
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data }); 
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
    }
  };
};

export const createProduct = (productData) => {
  return async (dispatch) => {
    dispatch({ type: 'CREATE_PRODUCT_START' });
    try {
      const token = getToken();
      const response = await createProductAPI(productData, token); 
      dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: response.data }); 
      
      dispatch(fetchProductsData());
    } catch (error) {
      dispatch({ type: 'CREATE_PRODUCT_FAILURE', payload: error.message });
    }
  };
};
