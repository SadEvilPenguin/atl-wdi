const SongSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    songLength: {
        type: Number,
        required: true
    },
    timesSkipped: {
        type: Number
    }
})

const PlaylistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    plays: {
        type: Number
    },
    songs: [SongSchema]
})

const StationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    plays: {
        type: Number
    },
    playlists: [PlaylistSchema]
})