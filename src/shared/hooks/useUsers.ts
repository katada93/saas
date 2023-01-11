import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  getAllUsers,
  selectUsersError,
  selectUsersList,
  selectUsersLoading,
} from 'features/users/userSlice';
import { useEffect } from 'react';

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(selectUsersList);
  const isLoading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return { usersList, isLoading, error };
};
