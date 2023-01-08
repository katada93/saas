import { Task } from 'shared/models/task.model';
import { apiInstance } from './base.service';

export class TaskService {
  private static BASE_URL = 'tasks/';

  public static getAll() {
    return apiInstance.get<Task[]>(TaskService.BASE_URL);
  }

  public static getById(id: number | string) {
    return apiInstance.get<Task>(TaskService.BASE_URL, {
      params: { id },
    });
  }

  public static getByBranch(branchId: number | string) {
    return apiInstance.get(TaskService.BASE_URL, {
      params: { branchId },
    });
  }
}
