import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutUserInputObjectSchema } from './TaskUpdateWithoutUserInput.schema';
import { TaskUncheckedUpdateWithoutUserInputObjectSchema } from './TaskUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TaskUpdateWithoutUserInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
