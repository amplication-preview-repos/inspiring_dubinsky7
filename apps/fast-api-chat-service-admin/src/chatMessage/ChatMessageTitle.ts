import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "content";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.content?.toString() || String(record.id);
};
