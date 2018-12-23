module.exports = async () => {
  const result = require('dotenv').config()
  if (result.error) {
    throw result.error
  }
}
