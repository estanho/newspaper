import { z } from "zod";

export const PageSchema = z.coerce.number().min(1).max(100);

export type PageType = z.infer<typeof PageSchema>;
