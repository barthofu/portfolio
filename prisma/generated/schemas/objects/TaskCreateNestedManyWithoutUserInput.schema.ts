import { z } from 'zod';
import { TaskCreateWithoutUserInputObjectSchema } from './TaskCreateWithoutUserInput.schema';
import { TaskUncheckedCreateWithoutUserInputObjectSchema } from './TaskUncheckedCreateWithoutUserInput.schema';
import { TaskCreateOrConnectWithoutUserInputObjectSchema } from './TaskCreateOrConnectWithoutUserInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TaskCreateWithoutUserInputObjectSchema),
        z.lazy(() => TaskCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => TaskUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => TaskUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TaskCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => TaskCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TaskWhereUniqueInputObjectSchema),
        z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TaskCreateNestedManyWithoutUserInputObjectSchema = Schema;
