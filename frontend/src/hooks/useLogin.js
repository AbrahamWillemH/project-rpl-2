import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
                return false; // Indicate failure
            }

            // Save user token and info to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
            return true; // Indicate success
        } catch (error) {
            setIsLoading(false);
            setError('Something went wrong');
            console.error('Login error:', error);
            return false; // Indicate failure
        }
    };

    return { login, error, isLoading };
};
