import {combineReducers} from "redux";

//reducers
//one returns static list of songs
//one to select song

const songsReducer = () => {
    return ([
        {title: "meow song", duration: "4:05"},
        {title: "i whooped batman's ass", duration: "2:30"},
        {title: "all star", duration: "3:15"},
        {title: "i want it that way", duration: "10:30"}
    ]);
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSongKey: selectedSongReducer
});