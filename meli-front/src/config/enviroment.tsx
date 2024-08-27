
const enviroments = {
  PORT: import.meta.env.PORT ?? '5000',
  BFF: {
    BASE_URL: import.meta.env.VITE_BFF_URL ?? '',
  },
};

export default enviroments;