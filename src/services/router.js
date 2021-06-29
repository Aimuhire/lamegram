export class Router {
    static navigateTo(view, params){
            window.history.pushState(view.viewName, view.viewTitle, view.viewRoute);
            const rootElement  = document.getElementById('lame-app-root')
            const controller = new view.viewController(rootElement, params)
            controller.renderComponent()

    }
}
