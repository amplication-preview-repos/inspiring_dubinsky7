import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
};
