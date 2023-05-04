import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const TaskMinAggregateInputObjectSchema = Schema;
