import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  getAllUsers,
  selectUsersError,
  selectUsersList,
  selectUsersLoading,
} from 'features/users/userSlice';

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector(selectUsersList);
  const isLoading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return useMemo(
    () => ({ userList, isLoading, error }),
    [error, isLoading, userList],
  );
};
