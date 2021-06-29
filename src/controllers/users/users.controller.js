import { UserListItem } from "../../models/users/userListItem.model.js";
import { UsersApi } from "../../services/api/v1/users/users.api.js"
import { PageHeaderView } from "../../views/shared/pageHeader.view.js";
import { UsersContainerView } from "../../views/users/usersContainer.view.js";
export class UsersController {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    fetchUsers() {
        UsersApi.getUsers()
            .then((response) => response.json())
            .then((users) => this.displayResults(users)).catch((e) => {
                this.rootElement.innerHTML = 'Error loading users. Please refresh page.'

            })

    }
    renderComponent() {
        this.fetchUsers();
        this.rootElement.innerHTML = "loading...";
    }

    displayResults(users) {
        const userListItems = []
        users.forEach(user => {
            userListItems.push(new UserListItem(user.id, user.name, user.email))
        });
        this.rootElement.innerHTML = ""
        const usersContainerView = new UsersContainerView(userListItems, this.router);
        const pageHeaderView = new PageHeaderView("The Infamous Lame Ten")
        this.rootElement.appendChild(pageHeaderView.getElement());
        this.rootElement.appendChild(usersContainerView.getElement());
    }

}
