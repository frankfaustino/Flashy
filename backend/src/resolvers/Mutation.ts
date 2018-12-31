import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { sendError } from '../middleware/utils'
import { ResolverMap } from '../types/graphql-utils'

const { APP_SECRET } = process.env

export const Mutation: ResolverMap = {
  signUp: async (_, { email, name, password }: GQL.ISignUpOnMutationArguments, ctx) => {
    const hashPassword = await hash(password, 12)
    const user = await ctx.prisma.createUser({
      email: email.toLowerCase(),
      name,
      password: hashPassword
    })
    const token = sign({ userId: user.id }, APP_SECRET)
    ctx.req.session.user = { id: user.id, token }

    return { token, id: user.id, name: user.name, email: user.email }
  },

  logIn: async (_, { email, password }: GQL.ILogInOnMutationArguments, ctx) => {
    const user = await ctx.prisma.user({ email: email.toLowerCase() })
    if (!user) {
      return sendError()
    }
    const valid = await compare(password, user.password)
    if (!valid) {
      return sendError()
    }

    const token = sign({ userId: user.id }, APP_SECRET)
    ctx.req.session.user = { id: user.id, token }

    return { token, id: user.id, name: user.name, email: user.email }
  },

  logOut: async (_, args, { req, res }) => {
    await req.session.destroy(err => err && ({ message: 'unable to logout' }))
    res.clearCookie('qid', { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    return { message: 'success!' }
  },

  deleteMe: async (_, {}, ctx) => ctx.prisma.deleteUser({ id: ctx.req.session.user.id }),

  deleteManyUsers: async (_, {}, ctx) => ctx.prisma.deleteManyUsers({ role_not: 'ADMIN' })
}