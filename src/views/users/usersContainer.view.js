import { UserView } from "../../views/users/userListItem.view.js";

export class UsersContainerView {
    constructor(users, router) {
        this.userViews = [];
        this.router = router;
        users.forEach(user => {
            this.userViews.push(new UserView(user, this.router))
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
