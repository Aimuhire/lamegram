import { APIEndpoints } from './services/api/v1/apiEndpoints.js'
import { Router } from './services/router.js'
import { ViewRegistry } from "./views/viewRegistry.js";

class App {
    constructor() {
        this.rootElement = document.getElementById('lame-app-root');
    }

    renderView() {
        console.log("wait we here")
        const path = window.location.pathname;
        console.log(path)
        switch (path) {
            case !path:
                console.log("routing to root")
                break;
            case path.match(/^users\/\d+$/):
                console.log("routing to users.html");
                break
            case path.match(/^users\/\d+\/album$/):
                console.log("routing to album.html")
            default:
                this.router.navigateTo(ViewRegistry.users);
                break;
        }
    }


}

const app = new App()
app.router = new Router(app)
console.log("jadshaiDa ")
app.renderView()