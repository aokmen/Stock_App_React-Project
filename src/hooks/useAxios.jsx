import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

//? react hookslarına ihtiyacımız olmasaydı bu şekilde de oluşturabilirdik.
// export const axiosWithPublic = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

const useAxios = () => {
  const { token } = useSelector(state => state.auth); //& tokeni stateden okumak için axios instanceları custom hook içerinde tanımladık.
  //+ birden fazla instance oluşturabiliriz. instance ı tanımladığımız isimle kullanabiliriz.
  const axiosWithToken = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  const axiosWithPublic = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  return { axiosWithToken, axiosWithPublic };
}

export default useAxios

// https://axios-http.com/docs/instance