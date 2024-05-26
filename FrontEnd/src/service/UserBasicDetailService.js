import axios from "axios";

const BASE_URL = "http://localhost:8080/api/user-basic-details";

class UserBasicDetailService{
    getAllUserBasicDetails(){
        return axios.get(BASE_URL);
    }

    saveBasicUserDetails(basicUserData){
        axios.post(`${BASE_URL}`, {basicUserData})
    }
}

export default new UserBasicDetailService();