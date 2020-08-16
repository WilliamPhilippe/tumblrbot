import { Request, Response } from 'express';

import PostsServices from '@modules/posts/services/PostsServices';

async function getLikedPosts(
  request: Request,
  response: Response,
): Promise<Response> {
  try {
    const posts = new PostsServices();

    posts.getLikedPosts(response);

    return response;
  } catch (err) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
}

export default { getLikedPosts };
