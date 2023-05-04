import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTasksInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutTasksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutTasksInputObjectSchema = Schema;
