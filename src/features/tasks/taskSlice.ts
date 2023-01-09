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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await TaskService.getAll();

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  async (id: number | string, { rejectWithValue }) => {
    try {
      const { data } = await TaskService.getById({ id });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getTaskByBranch = createAsyncThunk(
  'tasks/getTaskByBranch',
  async (branchId: number | string, { rejectWithValue }) => {
    try {
      const { data } = await TaskService.getByBranch({ branchId });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const setLoading = (state: TasksState) => {
  state.isLoading = true;
  state.error = '';
};

const setError = (state: TasksState, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const resetState = (state: TasksState) => {
  state.isLoading = false;
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
        resetState(state);
        state.taskList = action.payload;
      })
      .addCase(getTaskList.rejected, setError)
      .addCase(getTaskById.pending, setLoading)
      .addCase(getTaskById.fulfilled, (state, action) => {
        resetState(state);
        state.task = action.payload;
      })
      .addCase(getTaskById.rejected, setError)
      .addCase(getTaskByBranch.pending, setLoading)
      .addCase(getTaskByBranch.fulfilled, (state, action) => {
        resetState(state);
        state.task = action.payload;
      })
      .addCase(getTaskByBranch.rejected, setError);
  },
});

// const { } = tasksSlice.actions;

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
