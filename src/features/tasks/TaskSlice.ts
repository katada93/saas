import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Task {
  id: string;
  title: string;
  text: string;
  state: string;
  userId: string;
  branchId: string;
  points: number;
  time: number;
  message: string[];
}

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

export const getTasks = createAsyncThunk('tasks/fetch', async (_, thunkAPI) => {
  try {
    const res = await axios.get<Task[]>('/spreader/tasks');
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default tasksSlice.reducer;
