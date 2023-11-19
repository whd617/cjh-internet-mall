import express from 'express';
import { SERVER_PORT } from './constants/app.constant.js';
import db from './models/index.cjs';
import dotenv from 'dotenv';
const app = express();

try {
  await db.sequelize.authenticate();
  console.log(`Connection has been established successfully.`);
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
  res.send('Hello World!!!!');
});

app.listen(SERVER_PORT, () => {
  console.log(`📡 App Listneing on port`);
});
