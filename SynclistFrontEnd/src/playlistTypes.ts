export type songInfo = {
    title: string;
    //artist must be unique key structure tbd
    artist: string;
    //album must be unique key structure tbd
    album?: string;
    //playtime in seconds
    playTime: number;
};

//duration is calculated not stored
export type playlistInfo = {
    //must be a unique indentifier
    title: string;
    dateCreated: Date;
    createdBy: string;
    songs: Array<{song: songInfo, index: number, dateAdded: Date, addedBy: string}>;
};