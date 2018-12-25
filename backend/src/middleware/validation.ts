import { object, string } from 'yup'

import { sendError } from './utils'
import { Context } from '../types/graphql-utils'

const validationSchema = object().shape({
  name: string().trim().min(2).max(255),
  email: string().trim().min(3).max(255).email().required(),
  password: string().min(3).max(255).required()
})

export const validation = {
  async Mutation (resolve: any, root: any, args: object, ctx: Context, info: any) {
    try {
      await validationSchema.validate(args, { abortEarly: false })
    } catch (err) {
      return sendError(err)
    }
    const result = await resolve(root, args, ctx, info)
    return result
  }
}