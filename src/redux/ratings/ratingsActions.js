import { fetchAverageRatingAPI, addRatingAPI } from '@/utils/api'; 

export const fetchRating = (productId) => async (dispatch) => {
  dispatch({ type: 'FETCH_RATING_REQUEST' });
  try {
    const response = await fetchAverageRatingAPI(productId);
    dispatch({ type: 'FETCH_RATING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_RATING_FAILURE', payload: error.message });
  }
};

export const addRating = (ratingData, token) => async (dispatch) => {
  dispatch({ type: 'ADD_RATING_REQUEST' });
  try {
    console.log(ratingData , token);
    const response = await addRatingAPI( ratingData, token);
    dispatch({ type: 'ADD_RATING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_RATING_FAILURE', payload: error.message });
  }
};
