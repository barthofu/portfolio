import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutUserInputObjectSchema } from './TaskUpdateWithoutUserInput.schema';
import { TaskUncheckedUpdateWithoutUserInputObjectSchema } from './TaskUncheckedUpdateWithoutUserInput.schema';
import { TaskCreateWithoutUserInputObjectSchema } from './TaskCreateWithoutUserInput.schema';
import { TaskUncheckedCreateWithoutUserInputObjectSchema } from './TaskUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TaskUpdateWithoutUserInputObjectSchema),
      z.lazy(() => TaskUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TaskCreateWithoutUserInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const TaskUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
