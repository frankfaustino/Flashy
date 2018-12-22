import { verify } from 'jsonwebtoken'
import { object, string, ValidationError } from 'yup'
import { Context, Token } from './types/graphql-utils'

// Utility functions

export function getUserId(ctx: Context) {
  const Authorization = ctx.headers.authorization

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = verify(token, process.env.APP_SECRET) as Token

    return userId
  }
}

export async function getPermission(ctx: Context) {
  const id = ctx.userId

  if (id) {
    const user = ctx.prisma.user({ id })
    const res = await user.permissions()

    return res[0] === 'ADMIN'
  }
}

export function sendError(err?: ValidationError) {
  const errors: Array<{ path: string, message: string }> = []
  if (err) {
    err.inner.forEach(({ path, message }) => errors.push({ path, message }))
  } else {
    errors.push({ path: '', message: 'Not authorized' })
  }

  return { errors }
}

const yupSchema = object().shape({
  name: string().trim().min(2).max(255),
  email: string().trim().min(3).max(255).email(),
  password: string().min(3).max(255)
})

// Middleware

export const validation = {
  async Mutation (resolve: any, root: any, args: object, ctx: Context, info: any) {
    try {
      await yupSchema.validate(args, { abortEarly: false })
    } catch (err) {
      return sendError(err)
    }
    const result = await resolve(root, args, ctx, info)
    return result
  }
}

export const authorization = ['Query', 'Mutation'].reduce((obj, key) => {
  obj[key] = async (resolve: any, root: any, args: object, ctx: Context, info: any) => {
    const id = getUserId(ctx)
    ctx.userId = id
    ctx.userAdmin = await getPermission(ctx)
    const result = await resolve(root, args, ctx, info)
    return result
  }
  return obj
}, {})