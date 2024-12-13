const initialRatingsState = {
  ratings: {}, 
  loading: false,
  error: null,
};

const ratingsReducer = (state = initialRatingsState, action) => {
  switch (action.type) {
    case 'FETCH_RATING_START':
    case 'ADD_RATING_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_RATING_SUCCESS':
      return {
        ...state,
        loading: false,
        ratings: {
          ...state.ratings,
          [action.payload.productId]: action.payload.rating,
        },
      };
    case 'ADD_RATING_SUCCESS':
      return {
        ...state,
        loading: false,
        ratings: {
          ...state.ratings,
          [action.payload.productId]: action.payload.rating,
        },
      };
    case 'FETCH_RATING_FAILURE':
    case 'ADD_RATING_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ratingsReducer;
