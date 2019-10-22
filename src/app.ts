import express from 'express';
import Debug from 'debug';

import indexRouter from './router/index';

const main = () => {
  const PORT = process.env.PORT || 3000;

  const app = express();
  const debug = Debug('main');

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

  app.use('/', indexRouter);

  app.listen(PORT, () => {
    debug(`app listening on port ${PORT}`);
  });
};

main();
