import { privateAxios } from "../utils/AxiosHelper";

const BASE_URL = "/user-basic-details";

class UserBasicDetailService {
    getAllUserBasicDetails() {
        return privateAxios.get(BASE_URL);
    }

    saveBasicUserDetails(basicUserData) {
        return privateAxios.post(`${BASE_URL}`, basicUserData )
    }
}

export default new UserBasicDetailService();