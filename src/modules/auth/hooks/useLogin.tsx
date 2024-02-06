import { useState } from "react";
import httpHandler from "@lib/http-handler";
import { parseError } from "@lib/http-error-handler";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const doLogin = async ({ email, password}: any) => {
        setIsLoading(true);
        try {
            const response = await httpHandler.post("/auth/login", {
                email: email,
                password: password,
            });

            localStorage.setItem("access", response.data.data.token);

            return response.data;
        } catch (e: any) {
            throw parseError(e.response.data);
        } finally {
            setIsLoading(false);
        }
    };

    return { doLogin, isLoading };
};
