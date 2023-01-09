import { Task } from 'shared/models/task.model';
import { apiInstance } from './base.service';

interface Params {
  id?: number | string;
  branchId?: number | string;
}

export class TaskService {
  private static BASE_URL = 'tasks/';

  public static getAll() {
    return apiInstance.get<Task[]>(TaskService.BASE_URL);
  }

  public static getById(params: Params) {
    return apiInstance.get<Task>(TaskService.BASE_URL, { params });
  }

  public static getByBranch(params: Params) {
    return apiInstance.get<Task>(TaskService.BASE_URL, { params });
  }
}
