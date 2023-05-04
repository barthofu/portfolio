import { z } from 'zod';
import { UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';
import { UserCreateOrConnectWithoutTasksInputObjectSchema } from './UserCreateOrConnectWithoutTasksInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTasksInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutTasksInputObjectSchema = Schema;
