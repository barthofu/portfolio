import { z } from 'zod';
import { UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';
import { UserCreateOrConnectWithoutTasksInputObjectSchema } from './UserCreateOrConnectWithoutTasksInput.schema';
import { UserUpsertWithoutTasksInputObjectSchema } from './UserUpsertWithoutTasksInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTasksInputObjectSchema } from './UserUpdateWithoutTasksInput.schema';
import { UserUncheckedUpdateWithoutTasksInputObjectSchema } from './UserUncheckedUpdateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTasksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTasksInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutTasksInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutTasksInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutTasksInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTasksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema = Schema;
