import {useEffect, useState} from "react";
import httpHandler from "@lib/http-handler";
import {parseError} from "@lib/http-error-handler";

export const useLoggedInUser = () => {
    const [fetchedData, setFetchedData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLoggedInUser = async () => {
        setIsLoading(true);
        try {
            const response = await httpHandler.get("/me");
            setFetchedData(response.data);
        } catch (e: any) {
            throw parseError(e.response.data);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLoggedInUser();
    }, []);

    return { fetchLoggedInUser, fetchedData, isLoading };
}