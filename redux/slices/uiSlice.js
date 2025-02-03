"use client";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const useCredits = createAsyncThunk(
  'ui/useCredits',
  async (_, { rejectWithValue }) => {
    try {
      const { default: axiosInstance } = await import('../../utlis/axiosInstance');
      const response = await axiosInstance.post('/replicate/credit/use');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to use credits');
    }
  }
);

export const fetchUserCredits = createAsyncThunk(
  'ui/fetchUserCredits',
  async (_, { rejectWithValue }) => {
    try {
      const { default: axiosInstance } = await import('../../utlis/axiosInstance');
      const response = await axiosInstance.get('/replicate/credit');
      return response.data.data.credit;
    } catch (error) {
      console.error('Error fetching credits:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch credits');
    }
  }
);

export const fetchGalleryImages = createAsyncThunk(
  'ui/fetchGalleryImages',
  async (_, { rejectWithValue }) => {
    try {
      const { default: axiosInstance } = await import('../../utlis/axiosInstance');
      const response = await axiosInstance.get('/replicate/history');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch images');
    }
  }
);

export const generateImage = createAsyncThunk(
  'ui/generateImage',
  async (formData, { rejectWithValue }) => {
    try {
      const { default: axiosInstance } = await import('../../utlis/axiosInstance');
      const response = await axiosInstance.post('/replicate/generate-genifyl', formData);
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response || error.message);
      return rejectWithValue(error.response?.data?.message || 'Failed to generate image');
    }
  }
);

export const canvasImageGeneration = createAsyncThunk(
  'ui/canvasImageGeneration',
  async (formData, { rejectWithValue }) => {
    try {
      const { default: axiosInstance } = await import('../../utlis/axiosInstance');
      const response = await axiosInstance.post('/replicate/generate-canvas', formData);
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response || error.message);
      return rejectWithValue(error.response?.data?.message || 'Failed to generate canvas image');
    }
  }
);

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    // Generic
    gallery: {
      images: [],
      loading: false,
      error: null,
    },
    // Handle User Credit
    userCredits: {
      amount: 0,
      loading: false,
      error: null,
    },
    // Sidebar
    isSidebarOpen: true,
    activeTab: '/dashboard',
    // Genifyl Image Generation 
    imageGeneration: {
      prompt: '',
      loading: false,
      error: null,
      generatedImage: [],
      isGenerating: false,
      progress: 0 
    },
    // Canvas Image Generation 
    canvasImageGeneration: {
      loading: false,
      error: null,
      prompt: '',
      generatedImage: [],
    }
  },
  reducers: {
    // Generic
    clearGallery: (state) => {
      state.gallery.images = [];
      state.gallery.error = null;
    },

    // Handle User Credit
    setUserCredits: (state, action) => {
      state.userCredits.amount = action.payload;
    },

    // Side Bar
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },

    // Genifyl Image Generation 
    setPrompt: (state, action) => {
      state.imageGeneration.prompt = action.payload;
    },
    // canvas Image Generation 
    setCanvasGeneratedImage: (state, action) => {
      state.canvasImageGeneration.generatedImage = [...state.canvasImageGeneration.generatedImage,action.payload];
    },
    clearCanvasGeneratedImage: (state) => {
      state.canvasImageGeneration.generatedImage = [];
      state.canvasImageGeneration.error = null;
    },
    setCanvasGenerationError: (state, action) => {
      state.canvasImageGeneration.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle User Credit
      .addCase(fetchUserCredits.pending, (state) => {
        state.userCredits.loading = true;
        state.userCredits.error = null;
      })
      .addCase(fetchUserCredits.fulfilled, (state, action) => {
        state.userCredits.loading = false;
        state.userCredits.amount = action.payload;
      })
      .addCase(fetchUserCredits.rejected, (state, action) => {
        state.userCredits.loading = false;
        state.userCredits.error = action.payload;
      })
      .addCase(useCredits.fulfilled, (state, action) => {
        state.userCredits.amount = action.payload.remainingCredits;
      })
      // Handle Gallery Images
      .addCase(fetchGalleryImages.pending, (state) => {
        state.gallery.loading = true;
        state.gallery.error = null;
      })
      .addCase(fetchGalleryImages.fulfilled, (state, action) => {
        state.gallery.loading = false;
        state.gallery.images = action.payload;
      })
      .addCase(fetchGalleryImages.rejected, (state, action) => {
        state.gallery.loading = false;
        state.gallery.error = action.payload;
      })
      // Handle Genifyl Image Generation 
      .addCase(generateImage.pending, (state) => {
        state.imageGeneration.loading = true;
        state.imageGeneration.error = null;
        state.imageGeneration.generatedImage = [...state.imageGeneration.generatedImage];
      })
      .addCase(generateImage.fulfilled, (state, action) => {
        state.imageGeneration.loading = false;
        state.imageGeneration.generatedImage = [...state.imageGeneration.generatedImage, action.payload.data.url];
      })
      .addCase(generateImage.rejected, (state, action) => {
        state.imageGeneration.loading = false;
        state.imageGeneration.error = action.payload;
      })
      // Handle Canvas Image Generation 
      .addCase(canvasImageGeneration.pending, (state) => {
  state.canvasImageGeneration = {
    ...state.canvasImageGeneration,
    loading: true,
    error: null,
  };
})
.addCase(canvasImageGeneration.fulfilled, (state, action) => {
  state.canvasImageGeneration = {
    ...state.canvasImageGeneration,
    loading: false,
    generatedImage: [...state.canvasImageGeneration.generatedImage,action?.payload?.data?.url ?? null],
    error: null
  };
})
.addCase(canvasImageGeneration.rejected, (state, action) => {
  state.canvasImageGeneration = {
    ...state.canvasImageGeneration,
    loading: false,
    error: action.payload || 'Generation failed',
  };
});
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  clearGallery,
  setActiveTab,
  setUserCredits,
  setPrompt,
  setCanvasGeneratedImage,
  clearCanvasGeneratedImage,
  setCanvasGenerationError
} = uiSlice.actions;

// Selectors
export const selectUserCredits = (state) => {
  // More defensive checking
  if (!state || !state.ui || !state.ui.userCredits) {
    return 0;
  }
  return state.ui.userCredits.amount ?? 0;
};
export const selectGalleryImages = (state) => state?.ui?.gallery?.images;
export const selectGalleryLoading = (state) => state?.ui?.gallery?.loading;
export const selectGalleryError = (state) => state?.ui?.gallery?.error;
export const selectGeneratedImage = (state) => state?.ui?.imageGeneration?.generatedImage;
export const selectGenerationLoading = (state) => state?.ui?.imageGeneration?.loading;
export const selectGenerationError = (state) => state?.ui?.imageGeneration?.error;
export const selectIsGenerating = (state) => state?.ui?.imageGeneration?.isGenerating;
export const selectGenerationProgress = (state) => state?.ui?.imageGeneration?.progress;
export const selectPrompt = (state) => state?.ui?.imageGeneration?.prompt;

// Canvas Image generation
export const selectCanvasGeneratedImage = (state) => state?.ui?.canvasImageGeneration?.generatedImage;
export const selectCanvasGenerationLoading = (state) => state?.ui?.canvasImageGeneration?.loading;
export const selectCanvasGenerationError = (state) => state?.ui?.canvasImageGeneration?.error;

export default uiSlice.reducer;