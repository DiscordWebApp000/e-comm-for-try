const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const userProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_PRODUCTS_START':
      case 'UPDATE_USER_PRODUCT_START':
      case 'DELETE_USER_PRODUCT_START':
        return { ...state, loading: true, error: null };
  
      case 'FETCH_USER_PRODUCTS_SUCCESS':
        return { ...state, loading: false, products: action.payload };
  
      case 'UPDATE_USER_PRODUCT_SUCCESS':
        return {
          ...state,
          loading: false,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
  
      case 'DELETE_USER_PRODUCT_SUCCESS':
        return {
          ...state,
          loading: false,
          products: state.products.filter((product) => product.id !== action.payload),
        };
  
      case 'FETCH_USER_PRODUCTS_FAILURE':
      case 'UPDATE_USER_PRODUCT_FAILURE':
      case 'DELETE_USER_PRODUCT_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default userProductsReducer;
  