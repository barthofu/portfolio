import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTasksNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TaskUpdateInputObjectSchema = Schema;
