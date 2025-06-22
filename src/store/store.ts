import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import signupReducer from "./signupSlice";
import profileReducer from "./profileSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: signupReducer,
        profile: profileReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;