import { useDispatch } from "react-redux";
import {
    fetchProfileStart,
    fetchProfileSuccess,
    fetchProfileFailure,
    updateProfileStart,
    updateProfileSuccess,
    updateProfileFailure,
} from "../store/profileSlice";
import { profileService } from "../services/profileService";

export const useProfile = () => {
    const dispatch = useDispatch();

    const fetchUser = async () => {
        dispatch(fetchProfileStart());
        try {
            const user = await profileService.getUser();
            dispatch(fetchProfileSuccess(user));
            return user;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Failed to fetch profile";
            dispatch(fetchProfileFailure(errorMessage));
            throw error;
        }
    };

    const updateUser = async (formData: FormData) => {
        dispatch(updateProfileStart());
        try {
            const updatedUser = await profileService.updateMe(formData);
            dispatch(updateProfileSuccess(updatedUser));
            return updatedUser;
        } catch (error: any) {
            if (error.response?.data?.errors) {
                dispatch(updateProfileFailure(error.response.data.errors));
            } else {
                dispatch(updateProfileFailure({ general: ["Failed to update profile"] }));
            }
            throw error;
        }
    };

    return { fetchUser, updateUser };
};