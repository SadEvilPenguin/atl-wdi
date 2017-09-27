//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//create your donut schema:
const donutSchema = new Schema({
    //write your schema fields here
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
    },
    qty: {
        type: Number,
    },

});


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    shopping_cart: Array
})

//export your donut with module.exports()
const DonutModel = mongoose.model("Donut", donutSchema);
const UserModel = mongoose.model("User", userSchema)

module.exports = {
    DonutModel: DonutModel,
    UserModel: UserModel
}