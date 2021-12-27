import axios from 'axios';

import getVariables from '../shared/envVars';

const { BASE_URL } = getVariables();
const ADMIN_URL = `${BASE_URL}/admin`;

const validateStatus = (status: number): boolean => status >= 200 && status <= 499;

const api = axios.create({ validateStatus });

// Request interceptor for API calls
api.interceptors.request.use(
    async (config) => {
        // TODO: add token here
        const token = 'foo';
        const newConfig = {
            ...config,
            headers: {
                'x-auth-token': token || '',
                'Content-Type': 'application/json',
                ...config.headers,
            },
        };
        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export { api, BASE_URL, ADMIN_URL };
