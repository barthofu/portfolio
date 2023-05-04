import { z } from 'zod';
import { UserUpdateWithoutTasksInputObjectSchema } from './UserUpdateWithoutTasksInput.schema';
import { UserUncheckedUpdateWithoutTasksInputObjectSchema } from './UserUncheckedUpdateWithoutTasksInput.schema';
import { UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutTasksInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTasksInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutTasksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTasksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutTasksInputObjectSchema = Schema;
