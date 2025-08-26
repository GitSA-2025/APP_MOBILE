import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const API_URL = 'http://192.168.15.13:3000';
 
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
 

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
 
export default api;