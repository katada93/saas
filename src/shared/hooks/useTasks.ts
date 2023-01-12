import { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import {
  selectTaskList,
  selectTasksLoading,
  selectTasksError,
  getTaskList,
} from 'features/tasks/taskSlice';

export const useTasks = () => {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector(selectTaskList);
  const isLoading = useAppSelector(selectTasksLoading);
  const error = useAppSelector(selectTasksError);

  useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return useMemo(
    () => ({ taskList, isLoading, error }),
    [error, isLoading, taskList],
  );
};
