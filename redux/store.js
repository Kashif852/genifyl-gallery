// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import uiReducer from './slices/uiSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     ui: uiReducer,
//   },
// });

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import uiReducer from './slices/uiSlice';

// // Load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// // Save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('reduxState', serializedState);
//   } catch {
//     // Ignore write errors
//   }
// };

// const preloadedState = loadState();

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     ui: uiReducer,
//   },
//   preloadedState
// });

// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import uiReducer from './slices/uiSlice';

// // Load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// // Save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify({
//       auth: state.auth,
//     });
//     localStorage.setItem('reduxState', serializedState);
//   } catch {
//     // Ignore write errors
//   }
// };

// const preloadedState = loadState();

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     ui: uiReducer,
//   },
//   preloadedState
// });

// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;

"use client";
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth', 'ui'] // Persist both auth and ui states
};

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);