import { User, SingUpArgs, SingInArgs } from 'shared/models/user.model';
import { apiInstance } from './base.service';

export class UserService {
  private static BASE_URL = 'user/';

  public static signUp({ username, login, password, branchId }: SingUpArgs) {
    return apiInstance.post('registration/', {
      username,
      login,
      password,
      branchId,
    });
  }

  public static signIn({ username, login, password }: SingInArgs) {
    return apiInstance.post('login/', {
      username,
      login,
      password,
    });
  }

  public static getAll() {
    return apiInstance.get<User[]>(UserService.BASE_URL);
  }

  public static getById(id: number | string) {
    return apiInstance.get<User>(UserService.BASE_URL, {
      params: { id },
    });
  }

  public static getByBranch(branchId: number | string) {
    return apiInstance.get(UserService.BASE_URL, {
      params: { branchId },
    });
  }
}
