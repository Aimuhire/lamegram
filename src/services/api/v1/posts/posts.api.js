import { HttpClient } from "../../../HttpClient.service.js";
import { APIEndpoints } from "../apiEndpoints.js";

export class PostsApi{
    static getPosts(userId){
        return HttpClient.get(`${APIEndpoints.USERS_ENDPOINT}/${userId}/posts` );
    }
    static getPost(userId, postId){
        return HttpClient.get(`${APIEndpoints.POSTS_ENDPOINT}?userId=${userId}&id=${postId}` );
    }
}
