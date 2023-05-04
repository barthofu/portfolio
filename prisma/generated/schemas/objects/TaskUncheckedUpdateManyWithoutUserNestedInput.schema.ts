import { z } from 'zod';
import { TaskCreateWithoutUserInputObjectSchema } from './TaskCreateWithoutUserInput.schema';
import { TaskUncheckedCreateWithoutUserInputObjectSchema } from './TaskUncheckedCreateWithoutUserInput.schema';
import { TaskCreateOrConnectWithoutUserInputObjectSchema } from './TaskCreateOrConnectWithoutUserInput.schema';
import { TaskUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TaskUpsertWithWhereUniqueWithoutUserInput.schema';
import { TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TaskUpdateWithWhereUniqueWithoutUserInput.schema';
import { TaskUpdateManyWithWhereWithoutUserInputObjectSchema } from './TaskUpdateManyWithWhereWithoutUserInput.schema';
import { TaskScalarWhereInputObjectSchema } from './TaskScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutUserNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(() => TaskUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => TaskUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TaskWhereUniqueInputObjectSchema),
          z.lazy(() => TaskWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TaskUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => TaskUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TaskUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => TaskUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TaskScalarWhereInputObjectSchema),
          z.lazy(() => TaskScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TaskUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
