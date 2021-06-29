import { PostsApi } from "../../services/api/v1/posts/posts.api.js";
import { PageHeaderView } from "../../views/shared/pageHeader.view.js";
import { PostsContainerView } from "../../views/posts/postsContainer.view.js";
import { PostListItem } from "../../models/posts/postListItem.model.js";
import { ViewRegistry } from "../../views/viewRegistry.js";
import { Router } from "../../services/router.js"

export class PostsController {
    constructor(rootElement, params) {
        this.rootElement = rootElement;
        this.userId = params.userId;
        this.userName = params.userName;
    }

    fetchPosts() {
        PostsApi.getPosts(this.userId)
            .then((response) => response.json())
            .then((posts) => this.displayResults(posts)).catch((e) => {
                this.rootElement.innerHTML = 'Error loading user posts. Please refresh page.'
            })
    }
    renderComponent() {
        this.fetchPosts()
        this.rootElement.innerHTML = 'loading...'
    }

    displayResults(posts = []) {
        if (!posts.length) {
            alert('No posts found for user...')
            return
        }
        const postListItems = []
        posts.forEach(post => {
            let excerpt = "Missing content"
            if (post.body && post.body.length < 80) {
                excerpt = post.body;
            } else if (post.body) {
                excerpt = `${post.body.substr(0, 80)}...`;
            }
            postListItems.push(new PostListItem(post.userId, post.id, post.title, excerpt, this.userName))
        })
        this.rootElement.innerHTML = ""
        const postsContainerView = new PostsContainerView(postListItems);
        const pageHeaderView = new PageHeaderView(`${this.userName}'s Lame Posts`, "All Users", () => Router.navigateTo(ViewRegistry.users))
        this.rootElement.appendChild(pageHeaderView.getElement());
        this.rootElement.appendChild(postsContainerView.getElement());
    }

}
