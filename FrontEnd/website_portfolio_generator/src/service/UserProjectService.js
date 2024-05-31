import { privateAxios } from "../utils/AxiosHelper";

const BASE_URL = "http://localhost:8080/api/user-project";

class UserProjectService{
    getAll(){
        return privateAxios.get(BASE_URL);
    }

    save(data){
        return privateAxios.post(`${BASE_URL}`, data)
    }
}

export default new UserProjectService();