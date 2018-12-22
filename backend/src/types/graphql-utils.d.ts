import { Prisma } from '../generated/prisma-client'

export interface Context {
  prisma: Prisma
  headers: any
  userId: string
  userAdmin: boolean
}

export interface Token {
  userId: string
}

export interface ResolverMap {
  [key: string]: (parent: any, args: any, ctx: Context, info: any) => any
}