import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { Task } from 'shared/models/task.model';
import { TaskService } from 'shared/services/task.service';
import { prepare } from 'shared/utils';

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

export const getTaskListByBranch = createAsyncThunk(
  'tasks/getTaskByBranch',
  async (branchId: number | string, { rejectWithValue }) => {
    try {
      const { data } = await TaskService.getAllByBranch({ branchId });
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
        const prepared: Task[] = action.payload.map((task) => prepare(task));

        resetState(state);
        state.taskList = prepared;
      })
      .addCase(getTaskList.rejected, setError)
      .addCase(getTaskById.pending, setLoading)
      .addCase(getTaskById.fulfilled, (state, action) => {
        const prepared: Task = prepare(action.payload);

        resetState(state);
        state.task = prepared;
      })
      .addCase(getTaskById.rejected, setError)
      .addCase(getTaskListByBranch.pending, setLoading)
      .addCase(getTaskListByBranch.fulfilled, (state, action) => {
        const prepared: Task[] = action.payload.map((task) => prepare(task));

        resetState(state);
        state.taskList = prepared;
      })
      .addCase(getTaskListByBranch.rejected, setError);
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
