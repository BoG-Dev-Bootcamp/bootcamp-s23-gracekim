import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEnter: {
        type: Date,
        required: true
    },
    dateAdopt: Date
})

export default mongoose.model("Dog", dogSchema)