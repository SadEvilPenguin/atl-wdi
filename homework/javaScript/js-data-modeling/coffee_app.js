const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [{ name: String, quantity: Number }],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const CoffeShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    items: [ItemSchema]
})

const CartSchema = new Schema({
    orderId: {
        type: String,
        required: true
    },
    coffeeshop: [CoffeShopSchema],
    drink: {
        type: string,
        required: true
    },
    total: {
        type: price,
        required: true
    }
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
    coffeeshop: [CoffeShopSchema],
    pastOrders: [CartSchema]
})