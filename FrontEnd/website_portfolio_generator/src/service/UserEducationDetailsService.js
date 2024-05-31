import { privateAxios } from "../utils/AxiosHelper";

const BASE_URL = "/user-education-details";

class UserEducationDetailsService{
    getAll(){
        return privateAxios.get(BASE_URL);
    }

    save(data){
        // data = JSON.stringify(data, null, 4);
        console.log(data);
       return privateAxios.post(`${BASE_URL}`, data)
    }
}

export default new UserEducationDetailsService();