import { User } from '@prisma/client'
import { router } from '@server/trpc'
import { createController, getController, getAllController } from '@utils/functions'
import { UserCreateOneSchema } from 'prisma/generated/schemas'

export const usersRouter = router({

    // crud
    getAll: getAllController<User>('user'),
    get: getController<User>('user'),
    create: createController<User>('user', UserCreateOneSchema),

    // other
})