import { Prisma } from '../generated/prisma-client'
import { Request } from 'express'

export interface Context {
  prisma: Prisma
  req: Request
  request: Request
}

export interface Token {
  userId: string
}

export interface ResolverMap {
  [key: string]: (parent: any, args: any, ctx: Context, info: any) => any
}
