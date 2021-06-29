import { PostsApi } from "../../services/api/v1/posts/posts.api.js";
import { PageHeaderView } from "../../views/shared/pageHeader.view.js";
import { PostContainerView } from "../../views/posts/postContainer.view.js";
import { ViewRegistry } from "../../views/viewRegistry.js"
import { Post } from "../../models/posts/post.model.js";
import { Router } from "../../services/router.js";

export class PostController {
    constructor(rootElement, params) {
        this.rootElement = rootElement;
        this.userId = params.userId;
        this.postId = params.postId;
        this.userName = params.userName;
    }

    fetchPost() {
        PostsApi.getPost(this.userId, this.postId)
            .then((response) => response.json())
            .then((posts) => this.displayResults(posts[0])).catch((e) => {
                this.rootElement.innerHTML = 'Error loading user post. Please refresh page.'
            })
    }
    renderComponent() {
        this.fetchPost()
        this.rootElement.innerHTML = 'loading...'
    }

    displayResults(post) {
        if (!post) {
            alert('No post found for user...')
            return
        }
        const postModel = new Post(this.userId, this.postId, post.title, post.body, this.userName)
        this.rootElement.innerHTML = ""
        const postContainerView = new PostContainerView(postModel);
        const pageHeaderView = new PageHeaderView(`${postModel.userName}'s post`,
            "User Posts",
            () => {
                const view = ViewRegistry.posts;
                view.viewTitle = `${this.userName}'s Lame Posts`;
                view.viewRoute = `/users/${this.userId}/posts`
                Router.navigateTo(view, { userId: this.userId, userName: this.userName })
            })
        this.rootElement.appendChild(pageHeaderView.getElement());
        this.rootElement.appendChild(postContainerView.getElement());
    }

}
