import { UsersApi } from "./services/api/v1/users/users.api.js";
import { Router } from "./services/router.js";
import { ViewRegistry } from "./views/viewRegistry.js";

class App {
  constructor() {
    this.path = window.location.pathname;
  }

  /**
   * Loads content into the app view.
   */
  renderAppView() {
    if (this.path?.match(/^\/users\/\d+$/)) {
      Router.navigateTo(ViewRegistry.user);
    } else if (this.path?.match(/^\/users\/\d+\/posts$/)) {
      const userId = Number(this.path.match(/^\/users\/(\d+)\/posts$/)[1]);
      UsersApi.getUser(userId)
        .then((response) => response.json())
        .then((user) => {
          Router.navigateTo(ViewRegistry.posts, {
            userId,
            userName: user.name,
          });
        })
        .catch(() => alert("Could not retrieve user info."));
    } else if (this.path?.match(/^\/users\/\d+\/posts\/\d+$/)) {
      const matchObj = this.path.match(/^\/users\/(\d+)\/posts\/(\d+)$/);
      const userId = Number(matchObj[1]);
      const postId = Number(matchObj[2]);
      UsersApi.getUser(userId)
        .then((response) => response.json())
        .then((user) => {
          Router.navigateTo(ViewRegistry.post, {
            userId,
            postId,
            userName: user.name,
          });
        })
        .catch(() => alert("Could not retrieve user info."));
    } else {
      Router.navigateTo(ViewRegistry.users);
    }
  }
}

const app = new App();
app.renderAppView();
