import { UsersController } from "../controllers/users/users.controller.js";
export const ViewRegistry = {
    users : {
        viewName: "users",
        viewTitle: "Available Users",
        viewRoute: "/users",
        viewController:  UsersController,
    },
    user : {
        viewName: "user",
        viewTitle: "Users",
        viewRoute: "/users"
    }
}
