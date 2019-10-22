# strawberry

raspberryPi と GPIO センサでロギングするアプリケーション

## dependencies

- Node.js ^10
- RaspberryPi (GPIO)
- DHT22 Sensor

## installation

| sensor | port |
| ------ | ---- |
| DHT22  | 4    |

## usages

### yarn

```
$ yarn build
$ yarn debug
$ curl http://localhost:3000/api/v1/dht22
```

### npm

```
$ npm run build
$ npm run start
$ curl http://localhost:3000/api/v1/dht22
```
