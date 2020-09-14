export class Post {
    postId: number;
    title: string;
    text: string;
    author: string;
    visitsAmount: number;
    commentsAmount: number;
}

export class PostGetAllResponse {
    status: string;
    posts: {
        content: Post[];
    }
}

export class PostGetResponse {
    status: string;
    postDto: Post;
}