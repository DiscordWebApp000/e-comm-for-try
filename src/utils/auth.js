import jwt from 'jsonwebtoken';

// Save the token to localStorage
export const saveToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    console.error('Token cannot be empty!');
  }
};

// Retrieve the token from localStorage
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Decode the token and return the userRole
export const decodeToken = () => {
  try {
    const token = getToken(); 
    if (!token) {
      console.error('Token not found!');
      return null;
    }

    const decoded = jwt.decode(token); 
    if (!decoded) {
      console.error('Token decoding failed!');
      return null; 
    }

    const userRole = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; // Get the role information
    return { ...decoded, userRole }; 
  } catch (error) {
    console.error('An error occurred during token decoding:', error);
    return null;
  }
};

// Clear the token from localStorage
export const clearToken = () => {
  localStorage.removeItem('authToken');
};

// Check if the token is valid
export const isTokenValid = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwt.decode(token);
    if (!decoded) return false;

    const expiration = decoded.exp * 1000; 
    if (Date.now() > expiration) {
      clearToken();
      return false;
    }
    return true; // Token is valid
  } catch (error) {
    console.error('An error occurred during validity check:', error);
    return false;
  }
};

// Check the token when the page is loaded
export const checkToken = () => {
  return (dispatch) => {
    const token = getToken();

    if (!token) {
      console.log('No token, login required.');
      dispatch({
        type: 'CHECK_TOKEN',
        payload: { token: null, user: null }, 
      });
      return;
    }

    const isValid = isTokenValid(); // Check the token validity
    if (!isValid) {
      console.log('Token expired, logging out.');
      clearToken(); 
      dispatch({
        type: 'CHECK_TOKEN',
        payload: { token: null, user: null }, 
      });
      return;
    }

  };
};
