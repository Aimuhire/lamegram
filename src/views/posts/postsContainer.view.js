import { PostListItemView } from "../posts/postListItem.view.js";

export class PostsContainerView {
    constructor(postListItems) {
        this.postListItemViews = []
        postListItems.forEach(postListItem => {
            this.postListItemViews.push(new PostListItemView(postListItem))
        });
    }

    getElement() {
        const postsContainer = document.createElement('div');
        postsContainer.className = "posts-container";
        this.postListItemViews.forEach(userView => {
            postsContainer.appendChild(userView.getElement());
        });
        return postsContainer;
    }

}
