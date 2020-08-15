/* eslint-disable camelcase */
interface Fields {
  consumer_key: string;

  consumer_secret: string;

  token: string;

  token_secret: string;
}

class UserRepository {
  private data?: Fields;

  public get(): Fields | undefined {
    return this.data;
  }

  public set(data: Fields): void {
    this.data = data;
  }
}

export default UserRepository;

export { Fields };
