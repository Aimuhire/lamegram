import { HttpClient } from "../../../httpClient.service.js";
import { APIEndpoints } from "../apiEndpoints.js";

export class UsersApi {
  /**
   * Retrieves the users info from the server.
   * @returns {Promise} A fetch promise
   */
  static getUsers() {
    return HttpClient.get(APIEndpoints.USERS_ENDPOINT);
  }

  /**
   * Retrieves the user info from the server.
   * @param userId The user ID.
   * @returns {Promise} A fetch promise
   */
  static getUser(userId) {
    return HttpClient.get(`${APIEndpoints.USERS_ENDPOINT}/${userId}`);
  }
}
