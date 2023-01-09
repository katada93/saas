import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from 'shared/services/user.service';
import { SingInArgs, SingUpArgs, User } from 'shared/models/user.model';

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
      return thunkAPI.rejectWithValue(error.response.data);
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
      return thunkAPI.rejectWithValue(error.response.data);
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // signUp
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message || '';
        state.loading = false;
      })
      //   signIn
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message || '';
        state.loading = false;
      })
      //   getAll
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.usersList = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.error = action.error.message || '';
        state.loading = false;
      })
      //   getByBranch
      .addCase(getUsersByBranch.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getUsersByBranch.fulfilled, (state, action) => {
        state.usersList = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getUsersByBranch.rejected, (state, action) => {
        state.error = action.error.message || '';
        state.loading = false;
      })
      //   getById
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.error = action.error.message || '';
        state.loading = false;
      });
  },
});
