import { Router } from 'express';

import apiRouter from './api';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello Index' });
});

router.use('/api', apiRouter);

export default router;
