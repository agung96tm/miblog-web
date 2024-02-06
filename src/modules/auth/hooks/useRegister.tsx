import { useState } from 'react';
import httpHandler from '@lib/http-handler';
import { parseError } from '@lib/http-error-handler';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const doRegister = async ({ email, name, password }: any) => {
    setIsLoading(true);
    try {
      const response = await httpHandler.post('/auth/register', {
        email: email,
        password: password,
        name: name,
      });
      return response.data;
    } catch (e: any) {
      throw parseError(e.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { doRegister, isLoading };
};
