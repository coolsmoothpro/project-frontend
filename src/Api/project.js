import axios from 'axios';
import { SERVER_URL } from '../utils/Constant';

export const createProject = async (payload) => {

    try {
        const response = await axios.post(`${SERVER_URL}/project/create`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

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

export const projectList = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/project/list`);

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

export const getProject = async (payload) => {

    try {
        const response = await axios.post(`${SERVER_URL}/project/getById`, payload);

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

export const updateProjectStatus = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/update-project-status`, payload);

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

export const updateProject = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/update-project`, payload);

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

export const sendInvite = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/send-invite`, payload);

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

export const acceptInvite = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/accept-invite`, payload);

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

export const createTask = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/task-create`, payload);

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

export const taskList = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/task-list`, payload);

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

export const updateTaskStatus = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/task-update`, payload);

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

export const uploadProjectFile = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/upload-project-file`, payload);

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

export const deleteProject = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/delete-project`, payload);

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

export const deleteFile = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/delete-file`, payload);

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

export const download = async (fileUrl) => {
    try {
        const response = await axios.get(fileUrl, {
            responseType: 'blob', // Important to get the file as a blob
        });
            
        return { response };

    } catch (err) {
        console.error('Error during Project:', err);
        throw err;  // Optionally re-throw to handle the error in the component
    }
}

export const deleteMember = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/delete-member`, payload);

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

export const deleteTask = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/delete-task`, payload);

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

export const editTask = async (payload) => {
    try {
        const response = await axios.post(`${SERVER_URL}/project/edit-task`, payload);

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