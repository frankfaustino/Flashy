import { Prisma } from '../generated/prisma-client'

export interface Context {
  prisma: Prisma
  headers: any
  user: {
    id: string
    permission: string
  }
  req: {
    headers: {
      authorization: string
    }
  }
}

export interface Token {
  userId: string
}

export interface ResolverMap {
  [key: string]: (parent: any, args: any, ctx: Context, info: any) => any
}