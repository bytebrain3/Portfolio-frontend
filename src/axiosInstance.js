import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://portfolio-backend-8lef.onrender.com',
	headers: {
		'Content-Type': 'application/json',
	},
	// Enable sending cookies with requests
	withCredentials: true,
});

export default axiosInstance;
