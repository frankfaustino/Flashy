import { ResolverMap } from '../types/graphql-utils'

export const Query: ResolverMap = {
  me: (_, {}, ctx) => {
    if (ctx.userId) {
      return ctx.prisma.user({ id: ctx.userId })
    }
  },

  users: async (_, {}, ctx) => {
    if (ctx.userAdmin) {
      return ctx.prisma.users({})
    }
  },

  user: async (_, args: GQL.IUserOnQueryArguments, ctx) => {
    const { id, name } = await ctx.prisma.user({ id: args.id })
    return { id, name }
  }
}