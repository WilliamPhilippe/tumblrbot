import { TumblrClient } from 'tumblr.js';
import { Response } from 'express';

class PostsRepository {
  private likedPosts?: Array<string>;

  public fetchLikedPosts(
    client: TumblrClient,
    response: Response,
  ): void | Response {
    client.blogLikes('encardido.tumblr.com', (err, data) => {
      if (err) return console.log(err);

      this.setLikedPosts(data);
      return response.status(200).json({ posts: data });
    });
  }

  private setLikedPosts(data: any): void {
    this.likedPosts = data;
  }

  public getLikedPosts(): Array<string> | undefined {
    return this.likedPosts;
  }
}

export default PostsRepository;
