import axios from "axios";

const register = async(userData) => {
    const response = await axios.post('http://localhost:3004/register', userData);

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const logout = () => {
    localStorage.removeItem('user');
}

const login = async(userData) => {
    const response = await axios.post('http://localhost:3004/login', userData);

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const authService = {
    register,
    logout,
    login,
}

export default authService;