import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
  filter: filterReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
