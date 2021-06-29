import { ViewRegistry } from "../../views/viewRegistry.js"
import { Router } from "../../services/router.js"
export class PostView {
    constructor(post) {
        this.userId = post.userId;
        this.postId = post.postId;
        this.title = post.title;
        this.body = post.body;
        this.userName = post.userName;
    }

    getElement() {
        const postContainer = document.createElement('div');
        const postContentContainer = document.createElement('div');
        const authorLinkContainer = document.createElement('div');
        postContainer.classList = `card post post-${this.postId}-container`;

        const postTitle = document.createElement('div')
        const postBody = document.createElement('div')
        const authorLink = document.createElement('button')
        postTitle.className = "post-title"
        postBody.className = "post-body"
        authorLink.className = "link-btn"
        authorLinkContainer.className = "author-container"
        authorLink.addEventListener('click', () => {
            const view = ViewRegistry.posts;
            view.viewTitle = `${this.userName}'s Lame Posts`;
            view.viewRoute = `/users/${this.userId}/posts`
            Router.navigateTo(view, { userId: this.userId, userName: this.userName })
        })
        // Inject data
        postTitle.innerHTML = this.title.toUpperCase();
        postBody.innerHTML = this.body;
        authorLinkContainer.innerHTML = "Lame Author: "
        authorLink.innerHTML = this.userName;
        authorLinkContainer.append(authorLink)
        // Append data to container
        postContentContainer.appendChild(postTitle)
        postContentContainer.appendChild(postBody)

        postContainer.appendChild(postContentContainer)
        postContainer.appendChild(authorLinkContainer)
        return postContainer;
    }

}
