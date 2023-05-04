import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
  })
  .strict();

export const TaskUncheckedCreateWithoutUserInputObjectSchema = Schema;
