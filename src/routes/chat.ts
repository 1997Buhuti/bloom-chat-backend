import { Router } from 'express';
import { IChatService } from '../services/ChatService';
import { validateChatRequest } from '../middleware/validation';

export const createChatRouter = (chatService: IChatService): Router => {
  const router = Router();

  router.post('/chat', validateChatRequest, async (req, res, next) => {
    try {
      const result = await chatService.chat(req.body.prompt);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  return router;
};