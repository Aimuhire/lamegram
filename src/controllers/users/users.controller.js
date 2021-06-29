import { UserListItemModel } from "../../models/users/userListItem.model.js";
import { UsersApi } from "../../services/api/v1/users/users.api.js";
import { PageHeaderView } from "../../views/shared/pageHeader.view.js";
import { UsersContainerView } from "../../views/users/usersContainer.view.js";
export class UsersController {
  /**
   * Instantiates a UsersController object.
   * @param rootElement The app's root element.
   */
  constructor(rootElement) {
    this.rootElement = rootElement;
  }
  /**
   * Retrieves and displays the application users.
   */
  loadViewUsers() {
    UsersApi.getUsers()
      .then((response) => response.json())
      .then((users) => this.displayUsers(users))
      .catch((e) => {
        this.rootElement.innerHTML =
          "Error loading users. Please refresh page.";
      });
  }

  /**
   * Renders the users into the view.
   **/
  renderComponent() {
    this.loadViewUsers();
    this.rootElement.innerHTML = "loading...";
  }

  /**
   * Inject the users data into the view.
   * @param users - List of users.
   */
  displayUsers(users) {
    const userListItemModels = [];
    users.forEach((user) => {
      userListItemModels.push(
        new UserListItemModel(user.id, user.name, user.email)
      );
    });
    this.rootElement.innerHTML = "";
    const usersContainerView = new UsersContainerView(userListItemModels);
    const pageHeaderView = new PageHeaderView("The Infamous Lame Ten ");
    this.rootElement.appendChild(pageHeaderView.getElement());
    this.rootElement.appendChild(usersContainerView.getElement());
  }
}
