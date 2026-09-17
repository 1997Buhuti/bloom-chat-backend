import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { config } from '../config';

export interface IChatRepository {
  generateText(prompt: string): Promise<string>;
}

export class ChatRepository implements IChatRepository {
  private readonly model: GenerativeModel;

  constructor() {
    const genAI = new GoogleGenerativeAI(config.gemini.apiKey);
    this.model = genAI.getGenerativeModel({ model: config.gemini.model });
  }

  async generateText(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}