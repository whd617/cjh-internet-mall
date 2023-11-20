import express from 'express';
import { SERVER_PORT } from './constants/app.constant.js';
import Router from './middlewares/need-signin.middleware.js';
import db from './models/index.cjs';
const app = express();

app.use(express.json());
app.use('/api', Router);

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
