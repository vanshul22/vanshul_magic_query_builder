import { getLocalStorage } from '@/lib/appLogic/localStorage';
import { create } from 'zustand';
const VITE_USER_CODE = import.meta.env.VITE_USER_CODE;
const VITE_API_URL = import.meta.env.VITE_API_URL;


interface AuthState {
    user: User | null; // Use a more specific type than Object, assuming User is an appropriate type
    setUser: (user: User | null) => void; // Update the argument type to match the type of user
    updateUser: (key: keyof User, value: string) => void; // Update the argument type to match the type of user
    isAuthenticated: () => Promise<boolean>; //
}

export const useAuthStore = create<AuthState>((set) => ({
    token: "",
    user: null,
    setUser(user) { set({ user }) },
    updateUser: (key, value) => set((state) => ({
        user: state.user
            ? { ...state.user, [key]: value }
            : state.user,
    })),
    isAuthenticated: async () => {

        const storageResponse = await getLocalStorage(VITE_USER_CODE, true);
        if (!storageResponse.success) return false;

        const user = storageResponse.data as User;

        const response = await fetch(`${VITE_API_URL}api/users/check-signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'auth-token': user.token }
        });
        // Handle the case where the request was not successful (status code is not in the range 200-299)
        if (!response.ok) return false;
        else {
            await response.json();
            // Handle the JSON data returned by the server
            set({ user })
            return true;
        }
    }
}));