
const enviroments = {
    PORT: import.meta.env.PORT ?? '5000',
    BFF: {
        BASE_URL: import.meta.env.VITE_BFF_URL ?? '',
        API_VERSION: import.meta.env.VITE_BFF_API_VERSION ?? 'v1'
    },
};

export default enviroments;