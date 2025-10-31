import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import router from './routes/UserRoute.js';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
const allowedOrigin = ['http://localhost:5173']
app.use(cors({
  origin:allowedOrigin,
  credentials:true
}));
app.use(cookieParser());
await connectDB();


app.use("/api/user",router);
app.listen(PORT,() => console.log(`Connected on port ${PORT}`));