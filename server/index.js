import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

import { createConnection } from 'mysql';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set(port || 4000);

app.get('/', (req,res) => {
    res.send('Welcome to server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});