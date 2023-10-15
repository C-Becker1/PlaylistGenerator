import Artist, { ExternalUrlsObject, FollowersObject } from "../Entities/Artist"

type GetArtistDataResponse = {
    external_urls: external_urls_object
    followers: followers_object
    genres: string[]
    href: string
    id: string
    images: image_object[]
    name: string
    popularity: number
    type: string
    uri: string
}

type external_urls_object = {
    spotify: string
}

type followers_object = {
    href: string | null
    total: number 
}

type image_object = {
    url: string
    height: number | null
    width: number | null
}


export function MapDtoToArtistEntity(data: GetArtistDataResponse): Artist {
    console.log("data to parse:", data.external_urls)
    var artist: any = {}

    let externalUrls : ExternalUrlsObject = {
        Spotify: data.external_urls.spotify
    }
    artist.ExternalUrls = externalUrls

    let followers: FollowersObject = {
        Href: data.followers.href,
        Total: data.followers.total
    } 
    artist.Followers = followers

    artist.Genres = data.genres
    artist.Href = data.href
    artist.Id = data.id
    artist.Genres = data.genres

    let images : any[] = []
    data.images.forEach(imgObj => {
        images.push({ Url: imgObj.url, Height: imgObj.height, Width: imgObj.width })
    })
    artist.Images = images;

    artist.Name = data.name
    artist.Popularity = data.popularity
    artist.Type = data.type
    artist.Uri = data.uri

    return artist as Artist
}

export default GetArtistDataResponse