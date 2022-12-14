import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

const connection = async() => {
    await mongoose.connect(
        process.env.DB_URL, { useNewUrlParser: true }).then(() => {
        console.log("connected")
    })
}
export default connection