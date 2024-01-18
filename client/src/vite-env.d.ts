/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_BASE_PATH: string;
    readonly VITE_APP_URL: string;
    readonly VITE_API_URL: string;
    readonly VITE_SPLASH_SCREEN_CODE: string;
    readonly VITE_USER_CODE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}