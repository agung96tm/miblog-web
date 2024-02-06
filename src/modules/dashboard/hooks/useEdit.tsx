import { useState } from 'react';
import httpHandler from '@lib/http-handler';
import { parseError } from '@lib/http-error-handler';

export const useEdit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const doEdit = async ({ name }: any) => {
    setIsLoading(true);
    try {
      const response = await httpHandler.patch('/me', { name });
      return response.data;
    } catch (e: any) {
      throw parseError(e.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { doEdit, isLoading };
};
