import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/connectDB.js';
import formRoute from './Route/formRoute.js';
import adminRooute from './Route/adminRoute.js'
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.use('/api', adminRooute);
app.use('/api', formRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
