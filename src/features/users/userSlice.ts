import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { UserService } from 'shared/services/user.service';
import { SingInArgs, SingUpArgs, User } from 'shared/models/user.model';
import { RootState } from 'app/store';

export interface UserState {
  usersList: User[];
  user: User;
  token: string | null;
  payload: Object;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  usersList: [],
  user: {} as User,
  token: null,
  payload: {},
  loading: false,
  error: '',
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ username, login, password, branchId }: SingUpArgs, thunkAPI) => {
    try {
      const { data } = await UserService.signUp({
        username,
        login,
        password,
        branchId,
      });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({ username, login, password }: SingInArgs, thunkAPI) => {
    try {
      const { data } = await UserService.signIn({ username, login, password });

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      localStorage.setItem('token', data);

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getAllUsers = createAsyncThunk(
  'users/all',
  async (_, thunkAPI) => {
    try {
      const { data } = await UserService.getAll();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getUserById = createAsyncThunk(
  'users/byId',
  async (id: number | string, thunkAPI) => {
    try {
      const { data } = await UserService.getById(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getUsersByBranch = createAsyncThunk(
  'tasks/byBranch',
  async (branchId: number | string, thunkAPI) => {
    try {
      const { data } = await UserService.getByBranch(branchId);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const setError = (state: UserState, action: any) => {
  state.error = action.payload;
  state.loading = false;
};

const setLoading = (state: UserState) => {
  state.error = '';
  state.loading = true;
};

const resetState = (state: UserState) => {
  state.error = '';
  state.loading = false;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // signUp
      .addCase(signUp.pending, setLoading)
      .addCase(signUp.fulfilled, (state, action) => {
        resetState(state);
        state.user = action.payload;
      })
      .addCase(signUp.rejected, setError)

      //   signIn
      .addCase(signIn.pending, setLoading)
      .addCase(signIn.fulfilled, (state, action) => {
        resetState(state);
        state.token = action.payload;
      })
      .addCase(signIn.rejected, setError)

      //   getAll
      .addCase(getAllUsers.pending, setLoading)
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.usersList = action.payload;
        resetState(state);
      })
      .addCase(getAllUsers.rejected, setError)

      //   getByBranch
      .addCase(getUsersByBranch.pending, setLoading)
      .addCase(getUsersByBranch.fulfilled, (state, action) => {
        state.usersList = action.payload;
        resetState(state);
      })
      .addCase(getUsersByBranch.rejected, setError)

      //   getById
      .addCase(getUserById.pending, setLoading)
      .addCase(getUserById.fulfilled, (state, action) => {
        resetState(state);
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, setError);
  },
});

// Selectors

const selectUsersState = (state: RootState) => state.users;

export const selectUsersList = createSelector(
  selectUsersState,
  (state) => state.usersList,
);

export const selectUser = createSelector(
  selectUsersState,
  (state) => state.user,
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => state.loading,
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state) => state.error,
);

export default userSlice.reducer;
