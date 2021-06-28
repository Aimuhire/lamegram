import { UserView } from "../../views/users/userListItem.view.js";

export class UsersContainerView {
    constructor(users) {
        this.userViews = []
        users.forEach(user => {
            this.userViews.push(new UserView(user))
        });
    }

    getElement() {
        const usersContainer = document.createElement('div');
        usersContainer.className = "users-container";
        this.userViews.forEach(userView => {
            usersContainer.appendChild(userView.getElement());
        });
        return usersContainer;
    }

}