import { APIEndpoints } from "./api/v1/apiEndpoints.js";

export class HttpClient {
    static get(endpoint){
    return fetch(`${APIEndpoints.API_ROOT_URL}${endpoint}`)
}
}
