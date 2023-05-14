const port = process.env.PORT || 3003;

module.exports = {
    db_name : process.env.DB_NAME,
    db_user : process.env.DB_USER,
    db_pass : process.env.DB_PASS,
    db_dialact : process.env.DB_DIALACT,
    db_host : process.env.DB_HOST,
    port
}