export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  uploadedAt: Date | null;
  title: string | null;
};
