import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import route from './routes/routes.js';
import { connectDb } from './utils/db/connectDB.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 2001;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/api/v1",route);


connectDb();


app.get('/', (req, res) => {
    res.status(200).send("server is healthy");
});

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})