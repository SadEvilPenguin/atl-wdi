const showSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: number,
        required: true
    }
})

const BandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    shows: [showSchema]
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bands: [BandSchema]
})