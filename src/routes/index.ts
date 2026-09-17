import { Router } from 'express';
import { createChatRouter } from './chat';
import { IChatService } from '../services/ChatService';

export const createRootRouter = (chatService: IChatService): Router => {
  const router = Router();

  router.get('/', (_req, res) => {
    res.json({ message: 'Server is running!' });
  });

  router.get('/test', (_req, res) => {
    res.json({ success: true, message: 'Test endpoint is working' });
  });

  router.use('/api', createChatRouter(chatService));

  return router;
};