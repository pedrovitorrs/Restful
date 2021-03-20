module.exports = {
    dialect: 'postgres', 
    host: "localhost",
    port: 15432,
    username: 'postgres',
    password: 'postgres',
    database: 'sqlnode',
    define: {
        timestamps: 'true', 
        underscores: 'true',
    },
};