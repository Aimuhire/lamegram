import { UsersApi } from "../../services/api/v1/users/users.service.js"
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
        this.fetchUsers()
        console.log("root component: ", this.rootElement)
        this.rootElement.innerHTML = 'loading...'
    }

    displayResults(users) {
        this.rootElement.innerHTML = ""
        const usersContainerView = new UsersContainerView(users);
        const pageHeaderView = new PageHeaderView("The Infamous Lame Ten")
        this.rootElement.appendChild(pageHeaderView.getElement());
        this.rootElement.appendChild(usersContainerView.getElement());
    }

}
