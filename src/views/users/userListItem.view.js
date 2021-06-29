import { Router } from "../../services/router.js"
import { ViewRegistry } from "../viewRegistry.js";

export class UserView {
    constructor(user) {
        this.userId = user.userId;
        this.name = user.name;
        this.email = user.email;
    }

    getElement() {
        const userListItemContainer = document.createElement('div');
        const userInfoContainer = document.createElement('div');
        const getUserPostsContainer = document.createElement('div');
        userListItemContainer.classList = `card user-list-item user-${this.userId}-container`;

        const userName = document.createElement('div')
        const userEmail = document.createElement('div')
        const getPostsBtn = document.createElement('button')
        userName.className = "user-name"
        userEmail.className = "user-email"
        getPostsBtn.className = "primary-btn"
        getPostsBtn.addEventListener('click', () => {
            const view = ViewRegistry.posts;
            view.viewTitle = `${this.name}'s Lame Posts`;
            view.viewRoute = `/users/${this.userId}/posts`
            Router.navigateTo(view, { userId: this.userId, userName: this.name })
        })
        // Inject data
        userName.innerHTML = this.name;
        userEmail.innerHTML = this.email;
        getPostsBtn.innerHTML = "Get User’s Posts"
        // Append data to container
        userInfoContainer.appendChild(userName)
        userInfoContainer.appendChild(userEmail)
        getUserPostsContainer.appendChild(getPostsBtn)

        userListItemContainer.appendChild(userInfoContainer)
        userListItemContainer.appendChild(getUserPostsContainer)
        return userListItemContainer
    }

}
