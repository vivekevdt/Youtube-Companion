
const express = require('express');
const dbConnect = require('./db/db')
const cors = require('cors')

const userRouter = require('./routes/userRouter')

const app = express();
dbConnect()

app.use(cors({
    origin:["http://localhost:5173/"]
}))


app.use("/user",userRouter)








app.listen(process.env.PORT||3000,()=>{
    console.log('server is running on port 3000'); 
})
