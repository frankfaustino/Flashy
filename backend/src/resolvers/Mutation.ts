import { Context } from '../utils'

export const Mutation = {
  createUser(parent, args, ctx: Context) {
    ctx.prisma.createUser({ ...args })
  }
}