import User from '@shared/infra/database/User';

import { TumblrClient } from 'tumblr.js';

import PostReposity from '@modules/posts/repositories/PostsRespository';
import { Response } from 'express';

class PostsServices {
  private client: TumblrClient;

  private posts: PostReposity;

  constructor() {
    this.client = User.getClient();

    this.posts = new PostReposity();
  }

  public getLikedPosts(response: Response): void | Response {
    return this.posts.fetchLikedPosts(this.client, response);
  }
}

export default PostsServices;
