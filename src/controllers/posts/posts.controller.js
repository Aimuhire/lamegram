import { PostsApi } from "../../services/api/v1/posts/posts.api.js";
import { PageHeaderView } from "../../views/shared/pageHeader.view.js";
import { PostsContainerView } from "../../views/posts/postsContainer.view.js";
import { PostListItemModel } from "../../models/posts/postListItem.model.js";
import { ViewRegistry } from "../../views/viewRegistry.js";
import { Router } from "../../services/router.js";

export class PostsController {
  /**
   * Instantiates a PostsController object.
   * @param rootElement The app's root element.
   * @param params Navigation parameters object.
   */
  constructor(rootElement, params) {
    this.rootElement = rootElement;
    this.userId = params.userId;
    this.userName = params.userName;
  }

  /**
   * Retrieves and displays posts by the user in context.
   */
  loadViewPosts() {
    PostsApi.getPosts(this.userId)
      .then((response) => response.json())
      .then((posts) => this.displayPosts(posts))
      .catch(() => {
        this.rootElement.innerHTML =
          "Error loading user posts. Please refresh page.";
      });
  }

  /**
   * Renders the view into the root component.
   */
  renderComponent() {
    this.loadViewPosts();
    this.rootElement.innerHTML = "loading...";
  }

  /**
   * Inject the posts data into the posts' view.
   * @param posts List of user posts.
   */
  displayPosts(posts = []) {
    if (!posts.length) {
      alert("No posts found for user...");
      return;
    }
    const postListItemModels = [];
    posts.forEach((post) => {
      let excerpt = "Missing content";
      if (post.body && post.body.length < 80) {
        excerpt = post.body;
      } else if (post.body) {
        excerpt = `${post.body.substr(0, 80)}...`;
      }
      postListItemModels.push(
        new PostListItemModel(
          post.userId,
          post.id,
          post.title,
          excerpt,
          this.userName
        )
      );
    });
    this.rootElement.innerHTML = "";
    const postsContainerView = new PostsContainerView(postListItemModels);
    const pageHeaderView = new PageHeaderView(
      `${this.userName}'s Lame Posts`,
      "All Users",
      () => Router.navigateTo(ViewRegistry.users)
    );
    this.rootElement.appendChild(pageHeaderView.getElement());
    this.rootElement.appendChild(postsContainerView.getElement());
  }
}
