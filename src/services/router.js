export class Router {
    constructor(){
        window.onpopstate = ()=>{
            window.location = location.href
        }
    }
    static navigateTo(view, params){
            window.history.pushState(view.viewName, view.viewTitle, view.viewRoute);
            const rootElement  = document.getElementById('lame-app-root')
            const controller = new view.viewController(rootElement, params)
            controller.renderComponent()
            //TODO: Find better implementation. Haters say this isn't recommended for good SEO.
            document.title = view.viewTitle;
    }
}

// Just to register onpopstate handler.
new Router()
