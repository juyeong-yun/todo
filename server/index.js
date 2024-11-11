import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// 미들웨어
app.use(cors());
app.use(express.json());

// 라우터
app.use('/todos', todoRoutes);

app.get('/', (req,res) => {
    res.send('Welcome to the server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});