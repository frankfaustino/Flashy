import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { Context, Token } from '../types/graphql-utils'
import { shield, and, rule } from 'graphql-shield'

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (req.session && authorization) {
    const token = authorization.replace('Bearer ', '')
    const { userId: id } = verify(token, process.env.APP_SECRET) as Token
    req.session.user = { id, token }
  }
  next()
}

const isAuthenticated = rule()((_, args, { req }: Context) => req.session.user.id !== null)

const isAdmin = rule()(async (_, args, { prisma, req }: Context) => {
  if (req.session.user) {
    const { id } = req.session.user
    const scope = await prisma.user({ id }).role()
    return scope === 'ADMIN'
  }
  return false
})

export const permissions = shield({
  Query: {
    me: isAuthenticated,
    user: and(isAuthenticated, isAdmin),
    users: and(isAuthenticated, isAdmin)
  },
  Mutation: {
    deleteMe: isAuthenticated,
    deleteManyUsers: and(isAuthenticated, isAdmin),
    logOut: isAuthenticated
  }
})