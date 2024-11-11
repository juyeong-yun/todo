// ./routes/clearRoutes.js

import express from 'express';
import pool from '../db.js';

const router = express.Router();

/**
 * put : RESTful API에서 자원을 수정할 때 사용. 주로 리소스의 전체 업데이트를 의미
 * update : SQL 쿼리에서 UPDATE는 데이터를 수정할 때 사용하는 SQL 명령어
 * */
router.put('/toClear/:id', async(req, res) => {
    const {id} = req.params;
    // console.log(id);
    try{
        // MySQL에서 해당 id를 가진 할 일을 완료 상태로 업데이트
        await pool.query('UPDATE todolist SET clear = 1 WHERE id = ?', [id]);

        res.json({ message: 'Todo marked as cleared' });
    }catch(error){
        console.error('Error updating clear status: ', error);
        res.status(500).json({ message: 'Failed to update clear status' });
    }
});

export default router;