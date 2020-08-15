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
  }

  public getBlogInfo(response: Response): any {
    return this.user.getBlogInfo(response);
  }
}

export default UserService;
