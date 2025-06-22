import api from './api';
import type {User} from "./interfaces.ts";

export const profileService = {

    async getUser(): Promise<User> {
        const response = await api.get(`/me`);
        return response.data.data;
    },

    async updateMe(userData: any): Promise<User> {
        const response = await api.post('/update-me', userData,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    },
};