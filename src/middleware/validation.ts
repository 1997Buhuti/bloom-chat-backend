import { Request, Response, NextFunction } from 'express';

export const validateChatRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { prompt } = req.body;

  if (typeof prompt !== 'string' || prompt.trim().length === 0) {
    res.status(400).json({
      success: false,
      error: 'prompt is required and must be a non-empty string',
    });
    return;
  }

  next();
};