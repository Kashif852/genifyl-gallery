import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, signupUser, verifyToken, logoutUser, handleCallback } from '../../api/auth';
import axios from '../../utlis/axiosInstance';


export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUser(credentials);
      
      if (!response.user) {
        throw new Error('No user data in response');
      }
      
      return response.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Login failed'
      );
    }
  }
);

export const signUp = createAsyncThunk('auth/signUp', async (userData, { rejectWithValue }) => {
  try {
    const data = await signupUser(userData);
    return data.user;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('/auth/signout');
      dispatch(clearAuthState());
      return null;
    } catch (err) {
      dispatch(clearAuthState());
      return rejectWithValue(err.message);
    }
  }
);

export const handleGoogleAuth = createAsyncThunk(
  'auth/handleGoogleAuth',
  async ({ accessToken, provider }, { rejectWithValue }) => {
    try {
      // At this point, cookies should be set by the callback endpoint
      const result = await verifyToken();
      
      if (!result?.user) {
        throw new Error('No user data received from token verification');
      }
      
      return result.user;
    } catch (err) {
      console.error('Google auth error:', err);
      return rejectWithValue(err.message || 'Authentication failed');
    }
  }
);

export const verifySession = createAsyncThunk(
  'auth/verifyToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/auth/verify-session');

      if (!response?.data?.user) {
        throw new Error('Invalid response from server');
      }
      
      return response.data.user;
    } catch (err) {
      console.error('Session verification failed:', err);
      return rejectWithValue(err.message || 'Verification failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    tokenExpired: false,
    isAuthenticated: false
  },
  reducers: {
    setTokenExpired(state) {
      state.tokenExpired = true;
      state.isAuthenticated = false;
      state.user = null;
    },
    clearAuthState(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.tokenExpired = false;
      state.isAuthenticated = false;
    },
    resetError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.tokenExpired = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
        console.error('Login rejected:', action.payload);
      })
      // sign up
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Verify session cases
      .addCase(verifySession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifySession.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.tokenExpired = false;
        state.error = null;
      })
      .addCase(verifySession.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.tokenExpired = true;
        state.error = action.payload;
      })

      // Logout cases
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.tokenExpired = true;
      })

      // Google auth cases
      .addCase(handleGoogleAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleGoogleAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.tokenExpired = false;
        state.error = null;
      })
      .addCase(handleGoogleAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { resetError, setTokenExpired, clearAuthState } = authSlice.actions;
export default authSlice.reducer;