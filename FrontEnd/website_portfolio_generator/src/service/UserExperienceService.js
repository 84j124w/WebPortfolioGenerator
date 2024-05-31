import { privateAxios } from "../utils/AxiosHelper";

const BASE_URL = "/user-experience";

class UserExperienceService{
    getAll(){
        return privateAxios.get(BASE_URL);
    }

    save(data){
        console.log(JSON.stringify(data));
        return privateAxios.post(`${BASE_URL}`, data)
    }
}

export default new UserExperienceService();