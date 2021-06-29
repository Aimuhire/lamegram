export class Post {
    constructor(userId, postId, title, body, userName) {
        this.postId = postId;
        this.userId = userId;
        this.title = title;
        this.body = body;
        this.userName = userName;
    }
}