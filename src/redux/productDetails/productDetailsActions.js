// actions/productDetailsActions.js
import { fetchProductDetailsAPI } from '@/utils/api';

export const fetchProductDetails = (productId) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCT_DETAILS_START' });
    try {
      const response = await fetchProductDetailsAPI(productId);
      dispatch({ type: 'FETCH_PRODUCT_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCT_DETAILS_FAILURE', payload: error.message });
    }
  };
};
