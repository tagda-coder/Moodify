import api from "../../../api/axiosInstance"

export const loginUser =  (data) => api.post('/auth/login', data);
export const registerUser =  (data) => api.post('/auth/signup', data);
export const logoutUser =  () => api.post('/auth/logout');