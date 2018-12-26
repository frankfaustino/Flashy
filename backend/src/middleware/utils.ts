import { ValidationError } from 'yup'

export const sendError = (err?: ValidationError) => {
  const errors: Array<{ path: string, message: string }> = []
  if (err) {
    err.inner.forEach(({ path, message }) => errors.push({ path, message }))
  } else {
    errors.push({ path: '', message: 'Not authorized' })
  }

  return { errors }
}
