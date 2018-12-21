import { getUserId, Context } from '../utils'

export const Query = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },

  async users(parent, args, ctx: Context, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in!')
    // }
    // console.log(ctx.request.userId)
    return ctx.prisma.users({})
  }
}