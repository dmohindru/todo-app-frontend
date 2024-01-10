import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { decodeToken } from "react-jwt";

export interface AuthState {
    token?: string,
    refreshToken?: string,
    firstName?: string,
    lastName?: string
}

export interface AuthTokenAction {
    refreshToken: string,
    accessToken: string
}

const authInitalState: AuthState = {}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitalState,
    reducers: {
        addAuth(state: AuthState, auth: PayloadAction<AuthTokenAction>) {
            const token: any  = decodeToken(auth.payload.accessToken);

            return {
                refreshToken: auth.payload.refreshToken,
                token: auth.payload.accessToken,
                firstName: token?.given_name,
                lastName: token?.family_name
            };
        },
        updateRefreshToken(state: AuthState, tokens: PayloadAction<AuthTokenAction>) {
            state.refreshToken = tokens.payload.refreshToken;
            state.token = tokens.payload.accessToken;
        }
    }
});

export const { addAuth, updateRefreshToken } = authSlice.actions;
export const authReducer = authSlice.reducer;