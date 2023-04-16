import axios from 'axios';
import { useState } from 'react';

const useAxios = () => {
    const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
  
    const api = axios.create({
      baseURL: 'http://localhost:5002/',
      headers: {
        Authorization: jwt ? jwt : '',
      },
    });
  
    const setAuthorizationHeader = jwt => {
      setJwt(jwt);
      api.defaults.headers.common['Authorization'] = jwt;
      localStorage.setItem('jwt', jwt);
    };
  
    const clearAuthorizationHeader = () => {
      setJwt(null);
      api.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('jwt');
    };
  
    return { jwt,api, setAuthorizationHeader, clearAuthorizationHeader };
  };
  
  export default useAxios;