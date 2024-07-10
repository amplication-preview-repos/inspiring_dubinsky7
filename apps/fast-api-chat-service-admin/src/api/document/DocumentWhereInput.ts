import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
