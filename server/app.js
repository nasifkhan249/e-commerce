import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit'
import {CONNECTION_URI} from "./config/config.js"


const app=express();
app.use(
    cors({
    origin:"http://localhost:5173",
    methods: ["GET","POST","DELETE","PUT"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
})
);
app.use(cookieParser());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(hpp());
app.use(helmet());
app.use(express.urlencoded({extended: URL_ENCODED}));
const limiter =rateLimit({ windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER });
app.use(limiter);
app.set('etag', WEB_CACHE);


mongoose.connect(CONNECTION_URI,{autoIndex: true}).then(()=>{
    console.log("Database Connected");
    
}).catch((err)=>{
    console.error("Database connection error:", err);
})


export default app;