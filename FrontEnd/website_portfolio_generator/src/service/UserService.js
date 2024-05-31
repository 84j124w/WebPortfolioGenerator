import axios from "axios";

const USER_BASIC_DETAIL_BASE_URL = "http://localhost:8080/api/auth";

class UserService {

    registerUser({ fullname, email, password }) {
        console.log(fullname, email, password);
        return axios.post(`${USER_BASIC_DETAIL_BASE_URL}/register`, { fullname, email, password });
    }

    getUserById(id) {
        if (id !== undefined)
            return axios.get(`${USER_BASIC_DETAIL_BASE_URL}/${id}`);
    }

    loginUser({ username, password }) {
        return axios.post(`${USER_BASIC_DETAIL_BASE_URL}/login`, { username, password });
    }

    logoutUser(){
        return axios.get(`${USER_BASIC_DETAIL_BASE_URL}/logout`);
    }
}

export default new UserService();