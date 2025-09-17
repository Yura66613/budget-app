export interface Account {
  id: number;
  name: string;
  description?: string;
  balance: number;
  createdAt?: Date;
}

export interface CreateAccountRequest {
  name: string;
  description?: string;
  initialBalance?: number;
}

export interface UpdateAccountRequest {
  name?: string;
  description?: string;
}