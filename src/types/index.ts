export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  success: true;
  text: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
}

export interface HealthResponse {
  message: string;
  status: 'ok';
  timestamp: string;
}

export interface TestResponse {
  success: true;
  message: string;
}