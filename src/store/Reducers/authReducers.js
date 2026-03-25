import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
 
export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/admin-login', info, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: 'Something went wrong' }
      );
    }
  }
);
 
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loader: false,
    errorMessage: '',
    successMessage: '',
    token: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
        state.errorMessage = '';
        state.successMessage = '';
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message || 'Login successful';
        state.token = payload.token || '';
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage =
          action.payload?.error || action.error?.message || 'Login failed';
      });
  },
});
 
export default authSlice.reducer; 