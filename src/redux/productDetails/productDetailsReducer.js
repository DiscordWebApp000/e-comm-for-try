// reducers/productDetailsReducer.js
const initialProductDetailsState = {
    product: null,  
    loading: false, 
    error: null,     
  };
  
  const productDetailsReducer = (state = initialProductDetailsState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT_DETAILS_START':
        return { ...state, loading: true, error: null };
      case 'FETCH_PRODUCT_DETAILS_SUCCESS':
        return { ...state, loading: false, product: action.payload };
      case 'FETCH_PRODUCT_DETAILS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productDetailsReducer;
  