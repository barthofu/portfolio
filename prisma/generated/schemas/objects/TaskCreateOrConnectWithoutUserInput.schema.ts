import { z } from 'zod';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutUserInputObjectSchema } from './TaskCreateWithoutUserInput.schema';
import { TaskUncheckedCreateWithoutUserInputObjectSchema } from './TaskUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TaskCreateWithoutUserInputObjectSchema),
      z.lazy(() => TaskUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const TaskCreateOrConnectWithoutUserInputObjectSchema = Schema;
