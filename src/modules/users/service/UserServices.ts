import User from '@shared/infra/database/User';
import UserRepository, { Fields } from '../repositories/UserRepository';

class UserService {
  private user: UserRepository;

  constructor() {
    this.user = User;
  }

  public create(data: Fields): Fields | undefined {
    this.user.set(data);

    return this.user.get();
  }
}

export default UserService;
