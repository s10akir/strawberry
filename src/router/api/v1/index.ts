import Router from 'express';

import dht22Router from './dht22';

const router = Router();
router.use('/dht22', dht22Router);

export default router;
