export default () => ({
    port: process.env.PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT
})