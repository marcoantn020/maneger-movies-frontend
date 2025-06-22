import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure, logout } from "../store/authSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        dispatch(loginStart());
        try {
            const response = await api.post("/login", { email, password });
            const { access_token, user_name, photo } = response.data;
            dispatch(loginSuccess({
                token: access_token,
                user: user_name,
                photo: photo
            }));
            navigate("/adm");
            return true;
        } catch (error: any) {
            if (error.response) {
                dispatch(loginFailure({
                    errors: error.response.data.errors,
                }));
            }
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return { login, logout: handleLogout };
};