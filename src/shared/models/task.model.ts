export interface TaskDB {
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

export type Task = Omit<TaskDB, '__v' | 'updatedAt' | '_id'> & { id: string };
