import dotenv from 'dotenv';

dotenv.config();

const enviroments = {
  PORT: process.env.PORT ?? '3000',
  API_VERSION: process.env.API_VERSION ?? 'v1',
  MELI: {
    BASE_URL: process.env.MELI_BASE_URL ?? '',
  },
  AUTHOR: {
    NAME: process.env.AUTHOR_NAME ?? '',
    LASTNAME: process.env.AUTHOR_LASTNAME ?? '',
  },
};

export default enviroments;
