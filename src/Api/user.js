import axios from 'axios';
import { SERVER_URL } from '../utils/Constant';

export const createUser = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/user/create`, payload);
        if (response.data && response.status == 200) {;
            return { response };  // This now correctly returns the user object

        } else {
            console.error('Login failed with status:', response);
            return { response }
        }
    } catch (err) {
        console.error('Error during login:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}

export const userList = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/user/list`);

        if (response.data && response.data.success) {
            // const user = parseJwt(response.data.payload.token);  // Assuming response structure
            // setToken(response.data.payload.token);
            return { response };  // This now correctly returns the user object
        } else {
            console.error('SignUp failed with status:', response);
            return { response }
        }
    } catch (err) {
        console.error('Error during SignUp:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}