import { configureStore } from "@reduxjs/toolkit";
import bazarReducer from "./bazarSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }


//const persistedReducer = persistReducer(persistConfig, bazarReducer)

export const store = configureStore({
  // reducer: {bazar : persistedReducer},
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),

  reducer : {
    bazar : bazarReducer,
  }
});

//export let persistor = persistStore(store)