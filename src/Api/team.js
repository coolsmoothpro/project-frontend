import axios from 'axios';
import { SERVER_URL } from '../utils/Constant';

export const createTeam = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/team/create`, payload);

        if (response.data && response.status == 200) {
            
            return { response };  // This now correctly returns the user object
        } else {
            console.error('Project failed with status:', response);
            return { response }
        }

    } catch (err) {
        console.error('Error during Project:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}

export const teamList = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/team/list`);

        if (response.data && response.status == 200) {
            
            return { response };  // This now correctly returns the user object
        } else {
            console.error('Project failed with status:', response);
            return { response }
        }

    } catch (err) {
        console.error('Error during Project:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}

export const deleteTeam = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/team/delete`, payload);

        if (response.data && response.status == 200) {
            
            return { response };  // This now correctly returns the user object
        } else {
            console.error('Project failed with status:', response);
            return { response }
        }

    } catch (err) {
        console.error('Error during Project:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}