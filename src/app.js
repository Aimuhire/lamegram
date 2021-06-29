import { UsersApi } from './services/api/v1/users/users.api.js';
import { Router } from './services/router.js'
import { ViewRegistry } from "./views/viewRegistry.js";

class App {
    renderView() {
        const path = window.location.pathname;
        if (path?.match(/^\/users\/\d+$/)) {
            Router.navigateTo(ViewRegistry.user);
        } else if (path?.match(/^\/users\/\d+\/posts$/)) {
            const userId = Number(path.match(/^\/users\/(\d+)\/posts$/)[1]);
            UsersApi.getUser(userId).then((response) => response.json()).then((user) => {
                Router.navigateTo(ViewRegistry.posts, { userId, userName: user.name });
            })
        } else if (path?.match(/^\/users\/\d+\/posts\/\d+$/)) {
            const matchObj = path.match(/^\/users\/(\d+)\/posts\/(\d+)$/);
            const userId = Number(matchObj[1]);
            const postId = Number(matchObj[2]);
            UsersApi.getUser(userId).then((response) => response.json()).then((user) => {
                Router.navigateTo(ViewRegistry.post, { userId, postId, userName: user.name });
            })
        } else {
            Router.navigateTo(ViewRegistry.users);
        }
    }
}

const app = new App();
app.renderView();
