import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello Index' });
});

export default router;
