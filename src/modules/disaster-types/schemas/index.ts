import { z } from "zod";

export const createFormSchema = z.object({
  name: z.string().min(1),
  overview: z.string().min(1),
  image: z.string().url(),
  causes: z.array(z.string()).min(1),
  effects: z.array(z.string()).min(1),
  beforeTasks: z.array(z.string()).min(1),
  afterTasks: z.array(z.string()).min(1),
  checklistFile: z.string().url(),
});
