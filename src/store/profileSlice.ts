import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {User as UserProfile} from "../services/interfaces.ts";

interface ProfileState {
    user: UserProfile | null;
    loading: boolean;
    errors: Record<string, string[]> | null;
}

const initialState: ProfileState = {
    user: null,
    loading: false,
    errors: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        fetchProfileStart(state) {
            state.loading = true;
            state.errors = null;
        },
        fetchProfileSuccess(state, action: PayloadAction<UserProfile>) {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("user_name", action.payload.full_name);
            if (action.payload.photo) {
                localStorage.setItem("photo", action.payload.photo);
            } else {
                localStorage.removeItem("photo");
            }
        },
        fetchProfileFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.errors = { general: [action.payload] };
        },
        updateProfileStart(state) {
            state.loading = true;
            state.errors = null;
        },
        updateProfileSuccess(state, action: PayloadAction<UserProfile>) {
            state.loading = false;
            state.user = action.payload;
            localStorage.setItem("user_name", action.payload.full_name);
            if (action.payload.photo) {
                localStorage.setItem("photo", action.payload.photo);
            } else {
                localStorage.removeItem("photo");
            }
        },
        updateProfileFailure(state, action: PayloadAction<Record<string, string[]>>) {
            state.loading = false;
            state.errors = action.payload;
        },
        clearProfileErrors(state) {
            state.errors = null;
        },
        syncProfileFromAuth(state, action: PayloadAction<{name: string, photo?: string}>) {
            if (state.user) {
                state.user.full_name = action.payload.name;
                if (action.payload.photo) {
                    state.user.photo = action.payload.photo;
                }
            }
            localStorage.setItem("user_name", action.payload.name);
            if (action.payload.photo) {
                localStorage.setItem("photo", action.payload.photo);
            }
        }
    },
});

export const {
    fetchProfileStart,
    fetchProfileSuccess,
    fetchProfileFailure,
    updateProfileStart,
    updateProfileFailure,
    updateProfileSuccess,
    clearProfileErrors,
} = profileSlice.actions;
export default profileSlice.reducer;