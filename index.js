import express from 'express'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import fileRoutes from './routes/file.routes.js'
import mailRoutes from './routes/mail.routes.js'
import dotenv from "dotenv"
const app = express()
dotenv.config()
const PORT=5000
app.use(express.json())
//mounting
app.use('/api/auth', authRoutes)
app.use('/api/files', fileRoutes)
app.use('/api/mails', mailRoutes)


connectDB()

app.get('/',(req, res)=>{
    res.send("Cold mailer api is running")
})
app.listen(PORT, ()=>{
    console.log(`Server is running on Port : ${PORT}`)
})