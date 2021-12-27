/* eslint-disable unicorn/prevent-abbreviations */
interface Secrets {
    BASE_URL: string;
    MAPS_API_KEY: string;
    STRIPE_KEY: string;
}

const getVariables = (): Secrets => ({
    BASE_URL: process.env.REACT_APP_API_URL ?? '',
    MAPS_API_KEY: process.env.REACT_APP_MAPS_API_KEY ?? '',
    STRIPE_KEY: process.env.REACT_APP_STRIPE_KEY ?? '',
});

export default getVariables;
