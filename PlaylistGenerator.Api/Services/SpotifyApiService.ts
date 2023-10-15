import axios from "axios";
import GetArtistDataRequest from "../../SpotifyAnalytics.Shared/Dtos/GetArtistDataRequest";
import GetArtistDataResponse, { MapDtoToArtistEntity } from "../../SpotifyAnalytics.Shared/Dtos/GetArtistDataResponse";
import config from "../Utils/EnvironmentConfig";
import { GetToken, SetNullToken } from "../Controllers/OAuthController";
import Artist from "../../SpotifyAnalytics.Shared/Entities/Artist";

export async function GetArtistDataAsync(data: GetArtistDataRequest): Promise<Artist | null> {
    const endpoint: string = `${config.SPOTIFY_API_BASE_URL}/artists/${data.ArtistId}`
    console.log("ENDPOINT:", endpoint)
    const token = await GetToken();

    const headers = {
        'Authorization': `Bearer ${token.AccessToken}`, 
    };

    try {
        const responseStream = await axios.get(endpoint, { headers });
        const artist: Artist = MapDtoToArtistEntity(responseStream.data)
        console.log("artist:", artist)
        
        return artist;
    }
    catch (ex) {
        // controlar error. Si es por token, generar uno nuevo
        console.log("Exception in GetArtistDataAsync", ex)
        SetNullToken()
        return null;
    }

}