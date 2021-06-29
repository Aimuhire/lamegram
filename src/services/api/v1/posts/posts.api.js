import { HttpClient } from "../../../HttpClient.service.js";
import { APIEndpoints } from "../apiEndpoints.js";

export class PostsApi {
  /**
   * Retrieves the user posts from the server.
   * @param userId The user ID.
   * @returns {Promise} A fetch promise
   */
  static getPosts(userId) {
    return HttpClient.get(`${APIEndpoints.USERS_ENDPOINT}/${userId}/posts`);
  }

  /**
   * Retrieves the user post from the server.
   * @param userId The user ID.
   * @param postId The user ID.
   * @returns {Promise} A fetch promise
   */
  static getPost(userId, postId) {
    return HttpClient.get(
      `${APIEndpoints.POSTS_ENDPOINT}?userId=${userId}&id=${postId}`
    );
  }
}
