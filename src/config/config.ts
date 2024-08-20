import dotenv from "dotenv"
import { dot } from 'node:test/reporters';

dotenv.config()

const properties = {
    PORT : process.env.PORT,
}

export default properties;