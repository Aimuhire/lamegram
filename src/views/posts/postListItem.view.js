import { Router } from "../../services/router.js";
import { ViewRegistry } from "../viewRegistry.js"
export class PostListItemView {
    constructor(postListItem) {
        this.postId = postListItem.postId;
        this.userId = postListItem.userId;
        this.userName = postListItem.userName;
        this.title = postListItem.title;
        this.excerpt = postListItem.excerpt;
    }

    /**
     * Builds the view element.
     * @returns {HTMLElement} HTML element.
    */
    getElement() {
        const postListItemContainer = document.createElement('div');
        const postContentContainer = document.createElement('div');
        const readMoreBtnContainer = document.createElement('div');
        postListItemContainer.classList = `card post-list-item post-${this.postId}-container`;

        const postTitle = document.createElement('div')
        const postExcerpt = document.createElement('div')
        const readMoreBtn = document.createElement('button')
        postTitle.className = "post-title"
        postExcerpt.className = "post-excerpt"
        readMoreBtn.className = "primary-btn"
        readMoreBtnContainer.className = "read-more-container"
        readMoreBtn.addEventListener('click', ()=>{
            const view = ViewRegistry.post;
            view.viewName = this.title;
            view.viewRoute  = `/lamegram/users/${this.userId}/posts/${this.postId}`;
            Router.navigateTo(view, {userId: this.userId, postId: this.postId, userName: this.userName})
        })
        // Inject data
        postTitle.innerHTML = `💭 ${this.title.toUpperCase()}`;
        postExcerpt.innerHTML = this.excerpt;
        readMoreBtn.innerHTML = "Read More"
        // Append data to container
        postContentContainer.appendChild(postTitle)
        postContentContainer.appendChild(postExcerpt)
        readMoreBtnContainer.appendChild(readMoreBtn)

        postListItemContainer.appendChild(postContentContainer)
        postListItemContainer.appendChild(readMoreBtnContainer)
        return postListItemContainer
    }

}
