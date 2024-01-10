import { configureStore } from "@reduxjs/toolkit";
import { addAuth, updateRefreshToken, authReducer } from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export type {AuthTokenAction} from '../features/auth/authSlice';

export {
    addAuth,
    updateRefreshToken
};

export { store };