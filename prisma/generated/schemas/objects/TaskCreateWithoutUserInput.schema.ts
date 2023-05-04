import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateWithoutUserInput> = z
  .object({
    title: z.string(),
  })
  .strict();

export const TaskCreateWithoutUserInputObjectSchema = Schema;
