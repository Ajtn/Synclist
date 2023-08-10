import { Http2ServerResponse, OutgoingHttpHeaders } from "http2";
const hostServer = 'https://api.spotify.com/v1';


export function getUserPlaylists() {
    const https = require('https');
}

export function getSongDetails(id: string) {
    const https = require('https');
    const postConfig = {
        hostname: hostServer,
        port: 443,
        path: `/tracks/${id}`,
        method: 'GET',
        headers: {
            Authorization: getSpotifyToken()
        }
    };
    https.OutgoingHttpHeaders()
    https.get(`https://api.spotify.com/v1/tracks/${id}`, (res: Http2ServerResponse) => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });
    }).on('error', (err: Http2ServerResponse) => {
        console.log(err);
    });
}

function getSpotifyToken() {
    
}