import { Prisma } from '../generated/prisma-client'
import { Response, Request } from 'express'

export interface Context {
  prisma: Prisma
  req: Request
  res: Response
  request: Request
}

export interface Token {
  userId: string
}

export interface ResolverMap {
  [key: string]: (parent: any, args: any, ctx: Context, info: any) => any
}
