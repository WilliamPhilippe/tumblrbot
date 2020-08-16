/* eslint-disable camelcase */

import { createClient, TumblrClient } from 'tumblr.js';

import { Response } from 'express';

import AppError from '@shared/erros/AppError';

interface Fields {
  consumer_key: string;

  consumer_secret: string;

  token: string;

  token_secret: string;
}

class UserRepository {
  private data?: Fields;

  private client?: TumblrClient;

  public get(): Fields | undefined {
    return this.data;
  }

  public getClient(): TumblrClient {
    if (!this.client) throw new AppError('The client is not initiliazed.', 404);

    return this.client;
  }

  public set(data: Fields): void {
    this.data = data;
  }

  public createClient(): string {
    this.client = createClient({
      credentials: this.data,
      returnPromisses: true,
    });

    this.client.addPostMethods({
      addPostOnQueue: ['/v2/blog/:blogIdentifier/posts', ['id']],
    });

    return 'Client successfully created.';
  }

  public getBlogInfo(response: Response): void | Response {
    if (!this.client)
      return response.status(401).json({ Message: 'Client not initialized.' });

    this.client.blogInfo('encardido.tumblr.com', (err, data) => {
      return this.logInfo(response, data);
    });
  }

  private async logInfo(response: Response, data: string): Response {
    console.log(2);

    return response.status(200).json({ data });
  }
}

export default UserRepository;

export { Fields };
