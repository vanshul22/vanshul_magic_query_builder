import { create } from 'zustand';
import { addToLocalStorage } from '@/lib/appLogic/localStorage';
import { getFormattedStringDate } from '@/lib/appLogic/splashScreen';
const SPLASH_SCREEN_CODE = import.meta.env.VITE_SPLASH_SCREEN_CODE;

interface AppState {
    splashScreen: { timer: number; visible: boolean }
    setSplashScreen: (key: keyof AppState['splashScreen'], value: boolean | number) => void;
}

export const useAppStore = create<AppState>((set) => ({
    splashScreen: { timer: 3000, visible: true },
    setSplashScreen: (key, value) => {
        set((state) => ({ splashScreen: { ...state.splashScreen, [key]: value } }));
        addToLocalStorage(SPLASH_SCREEN_CODE, getFormattedStringDate(new Date()));
    },
}));