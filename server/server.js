import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from './routes/noteRoutes.js'
import summarizerRoutes from './routes/summarizerRoutes.js'
import rephraserRoutes from './routes/rephraserRoutes.js'
import authRoutes from './routes/authRoutes.js'
import connectDB from "./config/db.js";

dotenv.config('./env');

const app = express();

connectDB();

app.use(express.json());
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/notes', noteRoutes);
app.use('/summarizer', summarizerRoutes);
app.use('/rephraser', rephraserRoutes);
app.use('/auth/', authRoutes);


app.get('/', (req, res)=>{
    res.send({
        message: 'Welcome to the site'
    });
}); 


app.listen(PORT, ()=>{
    console.log("Server runnning on port", PORT);
});