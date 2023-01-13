import { TaskDB } from 'shared/models/task.model';
import { apiInstance } from './base.service';

interface Params {
  id?: number | string;
  branchId?: number | string;
}

export class TaskService {
  private static BASE_URL = 'tasks/';

  public static getAll() {
    return apiInstance.get<TaskDB[]>(TaskService.BASE_URL);
  }

  public static getById(params: Params) {
    return apiInstance.get<TaskDB>(TaskService.BASE_URL, { params });
  }

  public static getAllByBranch(params: Params) {
    return apiInstance.get<TaskDB[]>(TaskService.BASE_URL, { params });
  }
}
