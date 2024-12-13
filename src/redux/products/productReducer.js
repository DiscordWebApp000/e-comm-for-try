const initialState = {
    products: [],   
    loading: false,   
    error: null,       
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_START':
      case 'CREATE_PRODUCT_START':
        return { ...state, loading: true, error: null };
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'CREATE_PRODUCT_SUCCESS':
        return { ...state, loading: false, products: [...state.products, action.payload] }; 
      case 'FETCH_PRODUCTS_FAILURE':
      case 'CREATE_PRODUCT_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;
  