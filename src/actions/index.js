//action creator
export const selectSong = (song) => {
    //returns an action
    //has type and (payload optional)
    return({
        type: "SONG_SELECTED",
        payload: song
    });
};

