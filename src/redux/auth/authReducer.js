const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_START':
    case 'LOGIN_START':
    case 'UPDATE_USER_START': 
      return { ...state, isLoading: true, error: null };

    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user, 
        token: action.payload.token, 
      };

    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: { ...state.user, ...action.payload },
      };

    case 'REGISTER_FAILURE':
    case 'LOGIN_FAILURE':
    case 'UPDATE_USER_FAILURE': 
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case 'LOGOUT': 
      return initialState;

    case 'CHECK_TOKEN': 
      return {
        ...state,
        token: action.payload.token, 
        user: action.payload.user,  
      };

    default:
      return state;
  }
};

export default authReducer;
