import axiosInstance from '../utlis/axiosInstance';



// Login
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/signin', credentials);
    if (!response.data?.data?.user) {
      throw new Error('Invalid response format: missing user data');
    }
    return response.data.data; 
  } catch (error) {
    console.error('Login API Error:', error);
    throw error;
  }
};

// Signup
export const signupUser = async (userData) => {
  try {
    // Clean up the data structure to match backend expectations
    const requestData = {
      name: userData.name.trim(),
      email: userData.email.trim().toLowerCase(),
      password: userData.password
    };

    const response = await axiosInstance.post('/auth/signup', requestData);
    return response.data;
  } catch (error) {
    console.error('Signup error:', {
      status: error.response?.status,
      data: error.response?.data,
    });
    alert(JSON.stringify(error.response?.data?.error?.message))
    throw new Error(
      error.response?.data?.message || 
      error.response?.data?.error || 
      'Signup failed'
    );
  }
};


// Logout
// api/auth.ts
export const logoutUser = async () => {
  try {
    const response = await axios.post('/auth/signout');
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Initiate Google OAuth flow
export const handleCallback = async (accessToken, provider = null) => {
  try {
    // Call the callback endpoint to set cookies
    const response = await axiosInstance.get(`/auth/callback`, {
      params: {
        access_token: accessToken,
        provider
      }
    });

    // Check response structure
    const user = response.data.data.user
    const status = response.data.data.status
    const message = response.data.data.message
    
    if (!user || status !== 'success') {
      console.error('Invalid response structure:', response.data);
      throw new Error(message || 'Invalid server response');
    }

    return {
      user,
      message
    };
  } catch (error) {
    console.error('Callback error:', error);
    throw error;
  }
};


export const googleSignIn = async () => {
  try {
    const response = await axiosInstance.get('/auth/google');
    if (response.data?.data?.url) {
      window.location.href = response.data.data.url;
    } else {
      throw new Error('No redirect URL received');
    }
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw new Error(error.response?.data?.message || 'Failed to initiate Google sign-in');
  }
};

export const verifyToken = async () => {
  try {
    const response = await axiosInstance.post('/auth/verify-token', {}, {
      withCredentials: true
    });

    if (!response.data?.data?.data?.user) {
      throw new Error('Invalid response from server');
    }

    return response.data.data.data;
  } catch (error) {
    console.error('Token verification failed:', error);
    if (error.response?.status === 401) {
      throw new Error('Session expired');
    }
    throw new Error(error.response?.data?.message || 'Token verification failed');
  }
};
