import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'firstName',
  'lastName',
  'age',
]);
