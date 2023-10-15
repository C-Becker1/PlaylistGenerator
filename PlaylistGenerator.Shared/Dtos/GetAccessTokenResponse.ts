import Token from "../Entities/Token"
import SpotifyTokenResponse from "./SpotifyTokenResponse"

type GetAccessTokenResponse = {
    AccessToken: string
    TokenType: string
    ExpiresIn: string
}

export function MapDtoToTokenEntity(spotifyToken: SpotifyTokenResponse): Token {
    var token: any = {}

    token.AccessToken = spotifyToken.access_token
    token.TokenType = spotifyToken.token_type
    token.ExpiresIn = spotifyToken.expires_in

    return token as Token;
}

export default GetAccessTokenResponse