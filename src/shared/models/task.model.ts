export interface Task {
  id: string;
  title: string;
  text: string;
  state: string;
  userId: string;
  branchId: string;
  points: number;
  time: number;
  message: string[];
}
