import { prisma } from "@server/prisma"
import { publicProcedure } from "@server/trpc"
import { TRPCError } from "@trpc/server"
import { capitalize } from "@utils/functions"
import { z } from "zod"

type WithoutDollarSign<T> = { [K in keyof T]: T[K] extends never ? never : K }[keyof T]
type PrismaEntityTable = Exclude<WithoutDollarSign<typeof prisma>, `$${string}`>

export function getAllController<EntityType>(entityTable: PrismaEntityTable) {

    return publicProcedure
        .query(async(): Promise<EntityType[]> => {

            // @ts-ignore
            const records = await prisma[entityTable].findMany()
            return records
        })
}

export function getController<EntityType>(entityTable: PrismaEntityTable) {

    return publicProcedure
        .input(z.object({
            id: z.number()
        }))
        .query(async ({ input }): Promise<EntityType> => {
            
            // @ts-ignore
            const record = await prisma[entityTable].findUnique({
                where: {
                    id: input.id
                }
            })

            if (!record) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `${capitalize(entityTable)} not found`
                })
            }

            return record
        })
}

export function createController<EntityType>(entityTable: keyof typeof prisma, zodDto: any) {

    return publicProcedure
        .input(zodDto)
        .query(async ({ input }): Promise<EntityType> => {

            // @ts-ignore
            const record = await prisma[entityTable].create({
                // @ts-ignore
                data: input.data
            })

            return record
        })
}   