import { ResolverMap } from '../types/graphql-utils'

export const Query: ResolverMap = {
  me: async (_, {}, ctx) => ctx.prisma.user({ id: ctx.req.session.user.id }),

  users: async (_, {}, ctx) => ctx.prisma.users({}),

  user: async (_, args: GQL.IUserOnQueryArguments, ctx) => {
    const user = await ctx.prisma.user({ id: args.id })
    if (user) {
      return { id: user.id, name: user.name }
    }
  }
}