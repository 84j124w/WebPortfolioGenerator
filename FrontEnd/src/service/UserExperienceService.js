import axios from "axios";

const BASE_URL = "http://localhost:8080/api/user-experience";

class UserExperienceService{
    getAll(){
        return axios.get(BASE_URL);
    }

    save(data){
        axios.post(`${BASE_URL}`, {data})
    }
}

export default new UserExperienceService();