import { configureStore } from "@reduxjs/toolkit";
import { addAuth, updateRefreshToken, authReducer } from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export type {AuthTokenAction} from '../features/auth/authSlice';

export {
    addAuth,
    updateRefreshToken
};

export { store };