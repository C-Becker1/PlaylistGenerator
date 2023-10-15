import * as dotenv from 'dotenv';

dotenv.config();


interface IConfig {
    PORT: string
    API_KEY: string
    APP_STATUS: string
    SPOTIFY_API_BASE_URL: string
    SPOTIFY_TOKEN_BASE_URL: string
    SPOTIFY_CLIENT_ID: string
    SPOTIFY_CLIENT_SECRET: string
}

const config: IConfig = {
    PORT: process.env.PORT!,
    API_KEY: process.env.API_KEY!,
    APP_STATUS: process.env.APP_STATUS!,
    SPOTIFY_API_BASE_URL: process.env.SPOTIFY_API_BASE_URL!,
    SPOTIFY_TOKEN_BASE_URL: process.env.SPOTIFY_TOKEN_BASE_URL!,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID!,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET!,
};

export default config;