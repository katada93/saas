export interface Task {
  _id: string;
  title: string;
  text: string;
  state: string;
  points: number;
  time: number;
  message: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
