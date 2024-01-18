// Define a function to get string from localStorage
export async function getLocalStorage(key: string, isObject: boolean = false): Promise<LocalStorageResponse> {
    try {
        // Get the item with the specified key from localStorage
        const dataString = localStorage.getItem(key);

        if (dataString) {
            if (!isObject) {
                // If the data is a string, no need to parse it
                return { success: true, data: dataString as string };
            } else {
                // If the data is not a string, parse it as JSON
                const dataObject = await JSON.parse(dataString) as Record<string, string | number>;
                return { success: true, data: dataObject };
            }
        } else {
            return { success: false, error: "No data found" };
        }
    } catch (error) {
        console.error('Error getting data from localStorage:', error);
        return { success: false, error };
    }
}

// Define a function to add object to localStorage
export function addToLocalStorage(key: string, data: Record<string, string | number> | string): { success: boolean, error?: unknown } {
    try {
        if (typeof data === 'string') {
            // Store the JSON string in localStorage using the specified key
            localStorage.setItem(key, String(data));
            return { success: true };
        } else {
            // Convert the data to a JSON string before storing it
            const jsonData = JSON.stringify(data);
            // Store the JSON string in localStorage using the specified key
            localStorage.setItem(key, jsonData);
            return { success: true }
        }

    } catch (error) {
        console.error('Error adding data to localStorage:', error);
        return { success: false, error }
    }
}

// Define a function to remove data from localStorage
export function removeFromLocalStorage(key: string): { success: boolean, error?: unknown } {
    try {
        // Remove the item with the specified key from localStorage
        localStorage.removeItem(key);
        return { success: true }
    } catch (error) {
        console.error('Error removing data from localStorage:', error);
        return { success: false, error }
    }
}

// Define a function to up0date string and Object.
export async function updateLocalStorage(key: string, newData: string | Record<string, unknown>): Promise<LocalStorageResponse> {
    try {
        // Get the existing data from localStorage
        const oldDataString = localStorage.getItem(key);

        // Checking for undefined.
        if (oldDataString) {
            // Checking for string or object.
            if (typeof newData === 'string') {
                // Update the existing string value with the new string value
                localStorage.setItem(key, newData);
                return { success: true, data: newData };
            } else {
                // Parse the existing data from JSON
                const oldDataObject = JSON.parse(oldDataString);

                // Merge the existing data with the new data
                const updatedNewData = { ...oldDataObject, ...newData };

                // Convert the updated data to a JSON string and store it back in localStorage
                localStorage.setItem(key, JSON.stringify(updatedNewData));

                return { success: true, data: updatedNewData }
            }
        } else {
            console.error(`No data found in localStorage with key: ${key}`);
            return { success: false, error: "No data found" };
        }

    } catch (error) {
        console.error('Error getting data from localStorage:', error);
        return { success: false, error };
    }
}