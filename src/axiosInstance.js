import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://portfolio-backend-8lef.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default axiosInstance;