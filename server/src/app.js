// Express
import dotenv from 'dotenv'
import express from 'express'
import './config/db.js';
import cors from 'cors'; 

import userRouter from './routes/userRouter.js';
import convoRouter from './routes/convoRouter.js';
import messageRouter from './routes/messageRouter.js';
import communityRouter from './routes/communityRouter.js'; 
import imageRouter from './routes/imageRouter.js'; 

if (!process.env.APP_URL) {
  dotenv.config();
}

const app = express()

const appUrl = process.env.APP_URL
const port = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  const response = {
    message: 'Hello from the server!!!'
  }
  return res.status(200).json(response)
})

app.use('/api/user', userRouter);
app.use('/api/convo', convoRouter);
app.use('/api/message', messageRouter);
app.use('/api/community', communityRouter); 
app.use('/api/images', imageRouter);



if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is up on port ${appUrl}:${port}`)
  });
}

export default app;
