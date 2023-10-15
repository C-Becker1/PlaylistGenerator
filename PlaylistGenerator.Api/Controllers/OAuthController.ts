import axios from 'axios';
import qs from 'qs';
import GetAccessTokenResponse, { MapDtoToTokenEntity } from '../../SpotifyAnalytics.Shared/Dtos/GetAccessTokenResponse';
import { getAccessTokenRequest } from '../../SpotifyAnalytics.Shared/Dtos/GetAccessTokenRequest';
import config from '../Utils/EnvironmentConfig';
import Token from '../../SpotifyAnalytics.Shared/Entities/Token';

var token: Token | null = null

export async function GetToken(): Promise<Token> {
    console.log("token", token)
    if (token == null) {
        console.log("Token is expired... Requesting a new one")
        token = await RequestAccessToken()
    }
    return token!
}

export function SetNullToken() {
    token = null
}

export async function RequestAccessToken(): Promise<GetAccessTokenResponse | null> {
    const endpoint: string = config.SPOTIFY_TOKEN_BASE_URL

    if (endpoint == undefined) {
        return null;
    }
    try {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        
        const encodedData = qs.stringify(getAccessTokenRequest);

        const responseStream = await axios.post(endpoint, encodedData, {headers});
        const token: Token = MapDtoToTokenEntity(responseStream.data)
        return token;
    } catch (error) {
        console.error('Error:', error);
        // res.status(500).send('Internal Server Error');
        return null;
    }

}
