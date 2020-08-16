import { Response } from 'express';

import User from '@shared/infra/database/User';
import UserRepository, { Fields } from '../repositories/UserRepository';

class UserService {
  private user: UserRepository;

  constructor() {
    this.user = User;
  }

  public create(data: Fields): string {
    this.user.set(data);
    return this.user.createClient();
  }

  public async getBlogInfo(response: Response): any {
    const res = await this.user.getBlogInfo(response);
    return res;
  }
}

export default UserService;
