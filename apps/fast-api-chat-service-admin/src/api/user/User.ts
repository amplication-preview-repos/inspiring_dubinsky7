import { JsonValue } from "type-fest";
import { ChatMessage } from "../chatMessage/ChatMessage";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  chatMessages?: Array<ChatMessage>;
};
