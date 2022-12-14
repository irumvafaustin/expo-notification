import express from 'express'
import connection from './src/db/mongoose'
import tokenRouter from './src/routes/route'
const app = express()
app.use(express.json())
connection()
app.use(tokenRouter)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("The app is listening at port " + port)
})