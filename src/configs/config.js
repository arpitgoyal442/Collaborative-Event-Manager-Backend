
const postgres_user = process.env.POSTGRESQL_USERNAME;
const postgres_password = process.env.POSTGRESQL_PASSWORD;
const postgres_port = process.env.POSTGRESQL_PORT;
const postgres_db = process.env.POSTGRESQL_DB;





module.exports = {
    postgres_user,
    postgres_password,
    postgres_port,
    postgres_db
}