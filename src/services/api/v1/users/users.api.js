import { HttpClient } from "../../../HttpClient.service.js";
import { APIEndpoints } from "../apiEndpoints.js";

export class UsersApi{
    static getUsers(){
        return HttpClient.get(APIEndpoints.USERS_ENDPOINT);
    }
    static getUser(userId){
        return HttpClient.get(`${APIEndpoints.USERS_ENDPOINT}/${userId}`);
    }
}
