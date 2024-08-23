import dotenv from "dotenv"

dotenv.config()

const enviroments = {
    PORT : process.env.PORT,
    API_VERSION: process.env.API_VERSION,
    MELI: {
        BASE_URL: process.env.MELI_BASE_URL
    }
}

export default enviroments;