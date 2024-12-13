import jwt from 'jsonwebtoken';

// Token'ı localStorage'a kaydet
export const saveToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    console.error('Token boş olamaz!');
  }
};

// Token'ı localStorage'dan getir
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Token'ı decode et ve userRole döndür
export const decodeToken = () => {
  try {
    const token = getToken(); // Token'ı al
    if (!token) {
      console.error('Token bulunamadı!');
      return null; // Token yoksa null döner
    }

    const decoded = jwt.decode(token); // Token'ı decode et
    if (!decoded) {
      console.error('Token çözümleme başarısız!');
      return null; // Decode başarısızsa null döner
    }

    const userRole = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; // Role bilgisini al
    return { ...decoded, userRole }; // Tüm decoded bilgiyi ve userRole'u döndür
  } catch (error) {
    console.error('Token çözümleme sırasında bir hata oluştu:', error);
    return null;
  }
};

// Token'ı temizle
export const clearToken = () => {
  localStorage.removeItem('authToken');
};

// Token'ın geçerliliğini kontrol et
export const isTokenValid = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwt.decode(token);
    if (!decoded) return false;

    const expiration = decoded.exp * 1000; // JWT expiration time is in seconds, convert it to milliseconds
    if (Date.now() > expiration) {
      clearToken(); // Token expired, so clear it
      return false;
    }
    return true; // Token is valid
  } catch (error) {
    console.error('Geçerlilik kontrolü sırasında bir hata oluştu:', error);
    return false;
  }
};

// Sayfa açıldığında token'ı kontrol et
export const checkToken = () => {
  return (dispatch) => {
    const token = getToken(); // Token'ı localStorage'dan al

    if (!token) {
      console.log('Token yok, giriş yapılması gerekiyor.');
      dispatch({
        type: 'CHECK_TOKEN',
        payload: { token: null, user: null }, // Token yoksa state'i sıfırla
      });
      return;
    }

    const isValid = isTokenValid(); // Token'ın geçerliliğini kontrol et
    if (!isValid) {
      console.log('Token süresi dolmuş, oturum kapatılıyor.');
      clearToken(); // Token süresi dolmuşsa temizle
      dispatch({
        type: 'CHECK_TOKEN',
        payload: { token: null, user: null }, // Geçersiz token, state'i sıfırla
      });
      return;
    }

    
  };
};


