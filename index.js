import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.get('/test', (req, res) => {
  res.json({ success: true, message: 'Test endpoint is working' });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;