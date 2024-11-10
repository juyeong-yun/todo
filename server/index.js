import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set(port || 4000);

// DB연결
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.MYSQL_PW,
    database : 'todolist',
});

const connectToDB = () => {
    return new Promise((resolve, reject) =>{
        connection.connect ((err) => {
            if(err){
                reject('Failed to connect to MySQL: ' + err);
            } else {
                resolve('Successfully connected to MySQL');
            }
        });
    });
};

const fetchData = async() => {
    try{
        const message = await connectToDB();
        console.log(message);

        const [rows, feilds] = await connection.promise().query('SELECT * FROM todolist');
        console.log(rows);

    } catch(err) {
        console.error('Error:', err);
    } finally{
        connection.end(); //연결종료
    }
};

fetchData();

app.get('/', (req,res) => {
    res.send('Welcome to server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});