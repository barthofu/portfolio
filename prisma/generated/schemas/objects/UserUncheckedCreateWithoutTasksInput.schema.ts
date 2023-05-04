import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutTasksInput> = z
  .object({
    id: z.number().optional(),
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
  })
  .strict();

export const UserUncheckedCreateWithoutTasksInputObjectSchema = Schema;
