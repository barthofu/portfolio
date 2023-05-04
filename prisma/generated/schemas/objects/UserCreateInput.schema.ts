import { z } from 'zod';
import { TaskCreateNestedManyWithoutUserInputObjectSchema } from './TaskCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
    tasks: z
      .lazy(() => TaskCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
