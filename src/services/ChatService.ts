import { ChatResponse } from '../types';
import { IChatRepository } from '../repositories/ChatRepository';

export interface IChatService {
  chat(prompt: string): Promise<ChatResponse>;
}

export class ChatService implements IChatService {
  constructor(private readonly chatRepository: IChatRepository) {}

  async chat(prompt: string): Promise<ChatResponse> {
    const trimmed = prompt.trim();

    if (!trimmed) {
      throw new Error('prompt is required');
    }

    const text = await this.chatRepository.generateText(trimmed);

    return { success: true, text };
  }
}