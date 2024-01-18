type User = {
    id: number;
    username: string;
    email: string;
    token: string;
}

type NodeResponse<T extends Record<string, unknown>> = {
    success: boolean;
    message: string;
  } & T;


type LocalStorageResponse = {
    success: boolean
    data?: string | Record<unknown, string | number> | undefined
    error?: unknown
}
