export interface User {
  username: string;
  login: string;
  branchId: string;
  payload: Object;
}

export type SingUpArgs = {
  username: string;
  login: string;
  password: string;
  branchId: string;
};

export type SingInArgs = {
  username: string;
  login: string;
  password: string;
};
