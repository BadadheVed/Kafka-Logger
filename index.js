import express from"express"
const app = expres()
import dotenv from 'dotenv'
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 8080
app.listen(PORT , ()=>{
    console.log(`listening on the port ${PORT}`);
})