import { loginAPI, registerAPI } from '@/utils/api';
import { saveToken, decodeToken , clearToken , isTokenValid , getToken } from '@/utils/auth';

// Kullanıcı kaydı işlemi
export const register = (email, password, username, role) => {
  return async (dispatch) => {
    dispatch({ type: 'REGISTER_START' });

    try {
      
      const response = await registerAPI({ email, password, username, role });
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: error.response?.data?.message || 'Kayıt sırasında bir hata oluştu.',
      });
    }
  };
};

// Kullanıcı girişi işlemi
export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await loginAPI({ email, password });
      const token = response.data.token;

      if (token) {
        saveToken(token); 
        const decodedUser = decodeToken(); 
        

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            token,         
            user: decodedUser, 
          },
        });
      } else {
        throw new Error('Token alınamadı');
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};

// Çıkış işlemi
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('authToken'); 
    dispatch({ type: 'LOGOUT' }); 
  };
};


export const checkAuthToken = () => {
  return (dispatch) => {
    const token = getToken(); 

    if (!token) {
      console.log('Token yok, giriş yapılması gerekiyor.');
      dispatch({
        type: 'CHECK_TOKEN',
        payload: { token: null, user: null },
      });
      return;
    }

    const isValid = isTokenValid();
    if (!isValid) {
      console.log('Token süresi dolmuş, oturum kapatılıyor.');
      clearToken(); 
      dispatch({
        type: 'CHECK_TOKEN',
        payload: { token: null, user: null }, 
      });
      return;
    }

    const decodedUser = decodeToken(token); 
    dispatch({
      type: 'CHECK_TOKEN',
      payload: { token, user: decodedUser }, 
    });
  };
};
