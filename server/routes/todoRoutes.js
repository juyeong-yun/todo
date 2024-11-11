// ./routes/todoRoutes.js

import express from 'express';
import pool from '../db.js';

const router = express.Router();

// todo 조회
router.get('/getList', async(req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM todolist WHERE clear = 0');
        // console.log(rows);
        res.json(rows);
    } catch(error) {
        console.error('Error fetching Data: ', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// todo 추가
router.post('/add', async(req, res) => {
    // console.log(req.body);
    const {todo, date} = req.body;

    // 날짜를 MySQL에 적합한 형식으로 변환
    const formattedDate = new Date(date).toISOString().split('T')[0]; // YYYY-MM-DD 형식

    try {
        await pool.query('INSERT INTO todolist (todo, date) VALUES (?, ?)', [todo, formattedDate]);
        res.json({message : 'Todo added successfully'});
    } catch (error){
        console.error('Error adding todo: ', error);
        res.status(500).json({message: 'Failed to add todo'});
    }
});

router.delete('/deleteOne/:id', async(req, res) => {
    const id = req.params;
    // console.log(id);
    
    try {
        await pool.query('DELETE FROM todolist WHERE id = ?',[id]);
        res.json({message : 'Todo deleted successfully'});
    } catch (error){
        console.error('Error deleting todo: ', error);
        res.status(500).json({message: 'Failed to delete todo'});
    } 
});

export default router;