import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
    tasks: z
      .lazy(() => TaskUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
