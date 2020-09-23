import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        const request = await fetch(url, { method, body, headers });
        const data = await request.json();
        if (!request.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        setError(err.message);

        throw err;
      }
    }
  );

  const clearError = () => setError(null);

  return {
    loading,
    request,
    error,
    clearError,
  };
};
