import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsReducer } from './cars/carsSlice';

const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['items'],
};

const persistCarsReducer = persistReducer(carsPersistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    carsData: persistCarsReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
