import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { deliveryReducer } from 'redux/deliverySlice';

const persistConfig = {
  key: 'delivery',
  storage,
  whitelist: ['order'],
};

const persistedDeliveryReducer = persistReducer(persistConfig, deliveryReducer);

export const store = configureStore({
  reducer: {
    delivery: persistedDeliveryReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
