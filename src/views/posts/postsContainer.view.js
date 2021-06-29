import { PostListItemView } from "../posts/postListItem.view.js";

export class PostsContainerView {
    constructor(postListItems) {
        this.postListItemViews = []
        postListItems.forEach(postListItem => {
            this.postListItemViews.push(new PostListItemView(postListItem))
        });
    }

    /**
     * Builds the view element.
     * @returns {HTMLElement} HTML element.
    */
    getElement() {
        const postsContainer = document.createElement('div');
        postsContainer.className = "posts-container";
        this.postListItemViews.forEach(postListItemView => {
            postsContainer.appendChild(postListItemView.getElement());
        });
        return postsContainer;
    }

}
