export class Post {

    constructor(
        public postId: number,
        public title: string,
        public text: string,
        public author: string,
        public visitsAmount: number,
        public commentsAmount: number
    ){}
}

export class PostGetAllResponse {
    status : string;
    posts: {
        content: Post[];
    }

    constructor() {
        this.status = 'success';
        this.posts = {
            content: [
                new Post(1, 'post-title-1', 'text-1', 'post-author-1', 1, 2),
                new Post(2, 'post-title-2', 'text-2', 'post-author-2', 2, 0),
                new Post(3, 'post-title-3', 'text-3', 'post-author-3', 3, 3),
                new Post(4, 'post-title-4', 'text-4', 'post-author-4', 0, 0)
            ]
        }
    }
}

export class PostGetResponse {
    status: string;
    post : Post;

    constructor() {
        this.status = 'success';
        this.post = new Post(1, 'post-title-1', 'post-text-1', 'post-author-1', 1, 2);
    }
}