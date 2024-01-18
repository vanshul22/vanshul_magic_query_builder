import useSWR from 'swr';

interface FetcherOptions {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: unknown;
    token?: string;
}

export const fetcher = async (url: string, options: FetcherOptions = {}) => {
    try {
        const { method = 'GET', body, token } = options;

        const requestOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token || ""
            },
        };

        if (body) requestOptions.body = JSON.stringify(body);

        const response = await fetch(url, requestOptions);

        // if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

        const result = await response.json();

        return result;

    } catch (error: unknown) {
        console.error('Fetch error:', error);
        throw error;
    }
};
interface UseFetchDataResult {
    data?: unknown;
    error?: Error;
    isLoading: boolean;
    mutate: () => Promise<unknown>;
}

export const useFetchData = (url: string, options: FetcherOptions = {}): UseFetchDataResult => {

    const { data: responseData, error, mutate } = useSWR(
        [url, options?.method, options?.body, options.token],
        ([url, method, body, token]) => fetcher(url, { method, body, token }),
        { revalidateOnFocus: false });

    return { data: responseData, error, isLoading: !responseData && !error, mutate };
};