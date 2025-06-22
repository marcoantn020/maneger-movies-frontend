import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    user: string | null;
    photo: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: Record<string, string[]> | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("access_token") || null,
    user: localStorage.getItem("user_name") || null,
    photo: localStorage.getItem("photo") || null,
    isAuthenticated: !!localStorage.getItem("access_token"),
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ token: string; user: string, photo: string }>) {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.photo = action.payload.photo;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            localStorage.setItem("access_token", action.payload.token);
            localStorage.setItem("user_name", action.payload.user);
            localStorage.setItem("photo", action.payload.photo);
        },
        loginFailure(state, action: PayloadAction<{
            errors?: Record<string, string[]>;
        }>) {
            state.loading = false;
            state.error = action.payload.errors || null;
        },
        clearAuthErrors(state) {
            state.error = null;
        },
        logout(state) {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_name");
            localStorage.removeItem("photo");
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    clearAuthErrors,
    logout
} = authSlice.actions;
export default authSlice.reducer;