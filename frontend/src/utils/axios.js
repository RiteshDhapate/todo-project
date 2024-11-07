import axios from 'axios';

let token = '';

// Check if running in the browser
if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || '';
}
// Create an Axios instance with a header
const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`,
    headers: {
        'Authorization': `Bearer ${token}` 
    }
});


export default axiosInstance;
