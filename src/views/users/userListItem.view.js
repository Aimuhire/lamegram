
export class UserView {
    constructor(user) {
        this.user_id = user.id;
        this.name = user.name;
        this.email = user.email;
    }

    getElement() {
        const userListItemContainer = document.createElement('div');
        const userInfoContainer = document.createElement('div');
        const getUserPostsContainer = document.createElement('div');
        userListItemContainer.classList = `card user-list-item user-${this.user_id}-container`;

        const userName = document.createElement('div')
        const userEmail = document.createElement('div')
        const getPostsBtn = document.createElement('button')
        userName.className = "user-name"
        userEmail.className = "user-email"
        getPostsBtn.className = "get-user-posts-btn"
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