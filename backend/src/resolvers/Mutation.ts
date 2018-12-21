import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { Context } from '../utils'

const { APP_SECRET } = process.env

export const Mutation = {
  signup: async (parent, { email, name, password }, ctx: Context) => {
    const hashPassword = await hash(password, 12)
    const user = await ctx.prisma.createUser({
      email,
      name,
      password: hashPassword
    })
    const token = sign({ userId: user.id }, APP_SECRET)

    return { token, name: user.name, id: user.id }
  }
}