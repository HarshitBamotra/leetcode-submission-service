require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    REDIS_PORT: process.env.REDIS_PORT || "6379",
    REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
    DB_URL: process.env.DB_URL,
    PROBLEM_SERVICE_URL: process.env.PROBLEM_SERVICE_URL
}