import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { Task } from 'shared/models/task.model';
import { TaskService } from 'shared/services/task.service';

export interface TasksState {
  taskList: Task[];
  // возможно сделаем отдельный слайс для task
  task: Task;
  isLoading: boolean;
  error: string;
}

const initialState: TasksState = {
  taskList: [],
  // возможно сделаем отдельный слайс для task
  task: {} as Task,
  isLoading: false,
  error: '',
};

export const getTaskList = createAsyncThunk(
  'tasks/getTaskList',
  async (_, thunkAPI) => {
    try {
      const { data } = await TaskService.getAll();

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  async (id: number | string, thunkAPI) => {
    try {
      const { data } = await TaskService.getById(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTaskByBranch = createAsyncThunk(
  'tasks/getTaskByBranch',
  async (branchId: number | string, thunkAPI) => {
    try {
      const { data } = await TaskService.getByBranch(branchId);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const setError = (state: TasksState, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setLoading = (state: TasksState) => {
  state.isLoading = true;
  state.error = '';
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskList.pending, setLoading)
      .addCase(getTaskList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskList = action.payload;
        state.error = '';
      })
      .addCase(getTaskList.rejected, setError)
      .addCase(getTaskById.pending, setLoading)
      .addCase(getTaskById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.task = action.payload;
        state.error = '';
      })
      .addCase(getTaskById.rejected, setError)
      .addCase(getTaskByBranch.pending, setLoading)
      .addCase(getTaskByBranch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.task = action.payload;
        state.error = '';
      })
      .addCase(getTaskByBranch.rejected, setError);
  },
});

// const { setError } = tasksSlice.actions;

// Селекторы

const selectTasksState = (state: RootState) => state.tasks;

export const selectTaskList = createSelector(
  selectTasksState,
  (state) => state.taskList,
);

export const selectTask = createSelector(
  selectTasksState,
  (state) => state.task,
);

export const selectTasksLoading = createSelector(
  selectTasksState,
  (state) => state.isLoading,
);

export const selectTasksError = createSelector(
  selectTasksState,
  (state) => state.error,
);

export default tasksSlice.reducer;
