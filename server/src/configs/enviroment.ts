import dotenv from 'dotenv';

dotenv.config();

const enviroments = {
  PORT: process.env.PORT ?? '3000',
  API_VERSION: process.env.API_VERSION ?? 'v1',
  MELI: {
    BASE_URL: process.env.MELI_BASE_URL ?? '',
  },
};

export default enviroments;
