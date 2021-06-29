import { UsersController } from "../controllers/users/users.controller.js";
import { PostsController } from "../controllers/posts/posts.controller.js";
import { PostController } from "../controllers/posts/post.controller.js";
export const ViewRegistry = {
    users: {
        viewName: "users",
        viewTitle: "Available Users",
        viewRoute: "/users",
        viewController: UsersController,
    },
    user: {
        viewName: "user",
        viewTitle: "Available Users",
        viewRoute: "/users",
    },
    posts: {
        viewName: "posts",
        viewTitle: "User Posts",
        viewController: PostsController,
    },
    post: {
        viewName: "post",
        viewTitle: "User Post",
        viewController: PostController,
    }
}
