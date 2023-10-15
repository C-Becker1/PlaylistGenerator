import config from "../../SpotifyAnalytics.Api/Utils/EnvironmentConfig"

type GetAccessTokenRequest = {
    grant_type: string
    client_id: string
    client_secret: string
}

export default GetAccessTokenRequest

export const getAccessTokenRequest: GetAccessTokenRequest = {
    grant_type: 'client_credentials',
    client_id: config.SPOTIFY_CLIENT_ID,
    client_secret: config.SPOTIFY_CLIENT_SECRET
}


