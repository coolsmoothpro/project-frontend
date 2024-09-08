import axios from 'axios';
import { parseJwt, removeToken, setToken } from '../utils';
import { SERVER_URL } from '../utils/Constant';

export const registerAction = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/signup`, payload);

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

export const loginAction = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/signin`, payload);
        if (response.data && response.status == 200) {
            const token = parseJwt(response.data.token);  // Assuming response structure
            setToken(token);
            return { response, token };  // This now correctly returns the user object

        } else {
            console.error('Login failed with status:', response);
            return { response }
        }
    } catch (err) {
        console.error('Error during login:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}

export const currentUser = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/current-user`, payload);
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

export const updateUser = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/update-user`, payload);
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

export const deleteUser = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/delete-user`, payload);
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

export const updatePassword = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/update-password`, payload);
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

export const forgetPassword = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/forget-password`, payload);
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

export const resetAction = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/reset-password-action`, payload);
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

export const setStatus = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/auth/set-status`, payload);
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

export const subDomainLoginAction = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/client/signin`, payload);
        if (response.data && response.status == 200) {
            const token = parseJwt(response.data.token);  // Assuming response structure
            setToken(token);
            return { response, token };  // This now correctly returns the user object

        } else {
            console.error('Login failed with status:', response);
            return { response }
        }
    } catch (err) {
        console.error('Error during login:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}

export const subDomainResetAction = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/client/reset-password-action`, payload);
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