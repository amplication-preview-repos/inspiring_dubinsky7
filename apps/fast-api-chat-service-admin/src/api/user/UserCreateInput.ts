import { InputJsonValue } from "../../types";
import { ChatMessageCreateNestedManyWithoutUsersInput } from "./ChatMessageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  chatMessages?: ChatMessageCreateNestedManyWithoutUsersInput;
};
