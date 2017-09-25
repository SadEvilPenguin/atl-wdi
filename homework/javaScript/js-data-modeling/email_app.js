const emailSchema = new Schema({
    sentFrom: {
        type: String,
        required: true
    },
    subject: String,
    body: {
        type: String,
        required: true
    }
})

const emailServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: string,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
    },
    emails: [emailSchema]
})

const UserSchema = new UserSchema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailService: [emailServiceSchema]
})