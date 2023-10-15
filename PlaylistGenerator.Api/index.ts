import express, { Request, Response } from 'express';
import oAuthRoutes from './routes/OAuthRouter'; // Update with your path
import config from './Utils/EnvironmentConfig';
import { GetArtistDataAsync } from './Services/SpotifyApiService';
import GetArtistDataRequest from '../SpotifyAnalytics.Shared/Dtos/GetArtistDataRequest';
import Artist from '../SpotifyAnalytics.Shared/Entities/Artist';


const app = express();
const PORT = config.PORT || 3000;

app.get('/', async (req: Request, res: Response)  => {

    const data: GetArtistDataRequest = {
        ArtistId: "4Z8W4fKeB5YxbusRsdQVPb"
    }
    console.log("artist id:", data.ArtistId)
    const artistData: Artist | null = await GetArtistDataAsync(data) ;
  res.send(artistData);
});

app.use('/oauth', oAuthRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
