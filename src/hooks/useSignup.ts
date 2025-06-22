import { useDispatch } from "react-redux";
import { signupStart, signupSuccess, signupFailure } from "../store/signupSlice";
import api from "../services/api";

export const useSignup = () => {
    const dispatch = useDispatch();

    const signup = async (formData: FormData) => {
        dispatch(signupStart());
        try {
            await api.post("/signup", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            dispatch(signupSuccess());
            return true;
        } catch (error: any) {
            if (error.response?.data?.errors) {
                dispatch(signupFailure(error.response.data.errors));
            }
        }
    };

    return { signup };
};