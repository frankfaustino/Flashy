import { Prisma } from '../generated/prisma-client'

const { PRISMA_ENDPOINT, PRISMA_SECRET } = process.env

export const prisma = new Prisma({
  endpoint: PRISMA_ENDPOINT,
  secret: PRISMA_SECRET
})