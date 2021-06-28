import { UsersController } from "../controllers/users/users.controller.js"

export class Router {
    constructor(app){
        this.app = app;
    }
    navigateTo(view){
        console.log("navigating  to: ", view.viewName)
            window.history.pushState(view.viewName, view.viewTitle, view.viewRoute);
            const controller = new view.viewController(this.app.rootElement)
            controller.renderComponent()

    }
}