// Middleware ile kullanım
import { useNavigate } from "react-router-dom";
import { loginAsync, registerAsync, logoutAsync } from "../features/authSlice";
import { useDispatch } from "react-redux";


//! yine custom hook içerisinde yazarak daha temiz bir yapı elde ediyoruz. İçeride sadece login,register,logout fonksionlarını çağırmamız yeterli olacaktır.


const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async userInfo => {
    dispatch(loginAsync(userInfo))
      .then(res => {//!.then yapısını kullanarak yazdığımız loginAsync metodunun durumunu yakalıyoruz. Ona göre useri ilgili sayfaya yönlendirme yapıyoruz.
        console.log(res)// isteğin durumunu bize söylüyor.
        if (res.meta.requestStatus === "fulfilled") {// istek başarılı olduysa yönlendirmeyi yap diyoruz. useNavigatei createAsyncThunk içeriisnde kullanamıyoruz. Bu yöntem yerine navigate metodunu parametre ile loginAsynca e de yollayabiliriz.
          navigate("/stock");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const logout = async () => {
    dispatch(logoutAsync())
      .then(res => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const register = async userInfo => {
    dispatch(registerAsync(userInfo))
      .then(res => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/stock");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return { login, register, logout };
};

export default useAuthCall;
