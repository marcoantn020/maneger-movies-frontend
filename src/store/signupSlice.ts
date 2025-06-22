import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
    loading: boolean;
    error: Record<string, string[]> | null;
}

const initialState: SignupState = {
    loading: false,
    error: null,
};

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        signupStart(state) {
            state.loading = true;
            state.error = null;
        },
        signupSuccess(state) {
            state.loading = false;
            state.error = null;
        },
        signupFailure(state, action: PayloadAction<Record<string, string[]>>) {
            state.loading = false;
            state.error = action.payload;
        },
        clearErrors(state) {
            state.error = null;
        }
    },
});

export const { signupStart, signupSuccess, signupFailure, clearErrors } = signupSlice.actions;
export default signupSlice.reducer;