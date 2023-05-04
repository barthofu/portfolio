import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    tasks: z
      .lazy(() => TaskOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
