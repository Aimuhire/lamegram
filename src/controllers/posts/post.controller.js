import { PostsApi } from "../../services/api/v1/posts/posts.api.js";
import { PageHeaderView } from "../../views/shared/pageHeader.view.js";
import { PostContainerView } from "../../views/posts/postContainer.view.js";
import { ViewRegistry } from "../../views/viewRegistry.js";
import { PostModel } from "../../models/posts/post.model.js";
import { Router } from "../../services/router.js";

export class PostController {
  /**
   * Instantiates a PostController object.
   * @param rootElement The app's root element.
   * @param params Navigation parameters object.
   */
  constructor(rootElement, params) {
    this.rootElement = rootElement;
    this.userId = params.userId;
    this.postId = params.postId;
    this.userName = params.userName;
  }

  /**
   * Retrieves and displays the user's post in context.
   */
  loadViewPost() {
    PostsApi.getPost(this.userId, this.postId)
      .then((response) => response.json())
      .then((posts) => this.displayPost(posts[0]))
      .catch((e) => {
        this.rootElement.innerHTML =
          "Error loading user post. Please refresh page.";
      });
  }

  /**
   * Renders the view into the root element.
   */
  renderComponent() {
    this.loadViewPost();
    this.rootElement.innerHTML = "loading...";
  }

  /**
   * Inject post data into the view.
   */
  displayPost(post) {
    if (!post) {
      alert("No post found for user...");
      return;
    }
    const postModel = new PostModel(
      this.userId,
      this.postId,
      post.title,
      post.body,
      this.userName
    );
    this.rootElement.innerHTML = "";
    const postContainerView = new PostContainerView(postModel);
    const pageHeaderView = new PageHeaderView(
      `${postModel.userName}'s post`,
      "User Posts",
      () => {
        const view = ViewRegistry.posts;
        view.viewTitle = `${this.userName}'s Lame Posts`;
        view.viewRoute = `/lamegram/users/${this.userId}/posts`;
        Router.navigateTo(view, {
          userId: this.userId,
          userName: this.userName,
        });
      }
    );
    this.rootElement.appendChild(pageHeaderView.getElement());
    this.rootElement.appendChild(postContainerView.getElement());
  }
}
