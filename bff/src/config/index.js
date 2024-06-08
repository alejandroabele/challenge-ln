require('dotenv').config()
module.exports = {
  port: process.env.PORT || 8080,
  externalApi: {
    baseUrl: process.env.API_EXTERNAL_BASE_URL,
  },
}
