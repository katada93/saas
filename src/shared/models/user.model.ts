export interface User {
  username: string;
  login: string;
  branchId: string;
  payload: Object;
}

export interface SingUpArgs {
  username: string;
  login: string;
  password: string;
  branchId: string;
}

export interface SingInArgs {
  username: string;
  login: string;
  password: string;
}
