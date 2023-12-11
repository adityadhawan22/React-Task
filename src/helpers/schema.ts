// Create Posts Schema
import { z } from "zod";

export const PostsSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    user_id: z.number(),
  })
  .array();
export type PostsType = z.infer<typeof PostsSchema>;
