import { z } from 'zod';
import { UserCreateNestedOneWithoutTasksInputObjectSchema } from './UserCreateNestedOneWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateInput> = z
  .object({
    title: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutTasksInputObjectSchema),
  })
  .strict();

export const TaskCreateInputObjectSchema = Schema;
