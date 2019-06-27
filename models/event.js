import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true,
    }, 
    length: {
        type: Number,
        required: true,
    }
})

const Event = mongoose.model("Event", eventSchema)

export default Event