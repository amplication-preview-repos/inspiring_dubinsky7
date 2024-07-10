import { InputJsonValue } from "../../types";
import { ChatMessageUpdateManyWithoutUsersInput } from "./ChatMessageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  chatMessages?: ChatMessageUpdateManyWithoutUsersInput;
};
