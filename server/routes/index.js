// ./routes/index.js

import express from 'express';
import todoRoutes from './todoRoutes.js';
import clearRoutes from './clearRoutes.js';

const router = express.Router();

router.use('/todos', todoRoutes);
router.use('/clear', clearRoutes);

export default router;