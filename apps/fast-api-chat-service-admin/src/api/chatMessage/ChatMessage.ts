import { User } from "../user/User";

export type ChatMessage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  user?: User | null;
};
