import Router from 'express';

const DHT = require('node-dht-sensor');
const DHT_TYPE = 22;
const DHT_PIN = 4;

const router = Router();

router.get('/', (_, res) => {
  const sensorResult = DHT.read(DHT_TYPE, DHT_PIN);

  res.status(200).json(sensorResult);
});

router.get('/temperature', (_, res) => {
  const sensorResult = DHT.read(DHT_TYPE, DHT_PIN);

  res.status(200).json({
    temperature: sensorResult.temperature,
    isValid: sensorResult.isValid,
    errors: sensorResult.errors,
  });
});

router.get('/humidity', (_, res) => {
  const sensorResult = DHT.read(DHT_TYPE, DHT_PIN);

  res.status(200).json({
    humidity: sensorResult.humidity,
    isValid: sensorResult.isValid,
    errors: sensorResult.errors,
  });
});

export default router;
