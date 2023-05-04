import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutTasksInput> = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
  })
  .strict();

export const UserCreateWithoutTasksInputObjectSchema = Schema;
