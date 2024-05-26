import axios from "axios";

const BASE_URL = "http://localhost:8080/api/user-template";

class UserTemplateService{
    getAll(){
        return axios.get(BASE_URL);
    }

    save(data){
        axios.post(`${BASE_URL}`, {data})
    }
}

export default new UserTemplateService();