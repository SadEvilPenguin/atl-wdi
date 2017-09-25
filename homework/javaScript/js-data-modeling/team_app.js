const StatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    playerStats: [StatSchema]
})

const TeamsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    players: [PlayerSchema],
    teamStats: [StatSchema]
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teams: [TeamsSchema]
})