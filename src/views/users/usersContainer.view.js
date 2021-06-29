import { UserListItemView } from "../../views/users/userListItem.view.js";

export class UsersContainerView {
    constructor(users) {
        this.userListItemViews = [];
        users.forEach(user => {
            this.userListItemViews.push(new UserListItemView(user, this.router))
        });
    }

    /**
     * Builds the view element.
     * @returns {HTMLElement} HTML element.
    */
    getElement() {
        const usersContainer = document.createElement('div');
        usersContainer.className = "users-container";
        this.userListItemViews.forEach(userView => {
            usersContainer.appendChild(userView.getElement());
        });
        return usersContainer;
    }

}
