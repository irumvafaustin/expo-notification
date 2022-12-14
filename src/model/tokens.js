import mongoose from 'mongoose'

const tokenSchema = mongoose.Schema({
    token: {
        type: String
    }
}, { timestamps: true })

const Token = mongoose.model('token', tokenSchema)
export default Token