type Artist = {
    ExternalUrls: ExternalUrlsObject 
    Followers: FollowersObject
    Genres: string[]
    Href: string
    Id: string
    Images: ImageObject[]
    Name: string
    Popularity: number
    Type: string
    Uri: string
}

export type ExternalUrlsObject = {
    Spotify: string
}

export type FollowersObject = {
    Href: string | null
    Total: number 
}

export type ImageObject = {
    Url: string
    Height: number | null
    Width: number | null
}



export default Artist