module.exports = async () => {
  const result = require('dotenv').config({ path: '.env.test' })
  if (result.error) {
    throw result.error
  }
}
