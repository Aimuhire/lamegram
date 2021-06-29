import { UsersController } from "../controllers/users/users.controller.js";
import { PostsController } from "../controllers/posts/posts.controller.js";
import { PostController } from "../controllers/posts/post.controller.js";
export const ViewRegistry = {
    users: {
        viewName: "users",
        viewTitle: "Available Users",
        viewRoute: "/lamegram/users",
        viewController: UsersController,
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
