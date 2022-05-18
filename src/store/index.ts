import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { usersApi } from "./users";

const reducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
