import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// 미들웨어
app.use(cors());
app.use(express.json());

// 라우터
// API 역할 : 클라이언트가 데이터를 보내고, 
// 서버가 그 데이터를 처리한 후 클라이언트에게 응답을 보내는 것
app.use('/api', routes);

app.get('/', (req,res) => {
    res.send('Welcome to the server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});