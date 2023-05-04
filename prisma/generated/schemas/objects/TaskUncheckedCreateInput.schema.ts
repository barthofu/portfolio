import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    userId: z.number(),
  })
  .strict();

export const TaskUncheckedCreateInputObjectSchema = Schema;
