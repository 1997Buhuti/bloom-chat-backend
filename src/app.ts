import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { createRootRouter } from './routes';
import { errorHandler } from './middleware/errorHandler';
import { ChatRepository } from './repositories/ChatRepository';
import { ChatService } from './services/ChatService';

export const createApp = (): Application => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const chatRepository = new ChatRepository();
  const chatService = new ChatService(chatRepository);

  app.use(createRootRouter(chatService));

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ success: false, error: 'Not found' });
  });

  app.use(errorHandler);

  return app;
};