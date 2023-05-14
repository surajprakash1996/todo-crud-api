const { Sequelize, DataTypes }  = require('sequelize');
const connection = require('../config/connection');
const Todo = require('./todo.model');


const sequelize = new Sequelize(connection.db_name, connection.db_user, connection.db_pass, {
    host: connection.db_host,
    dialect: connection.db_dialact,
    logging:false
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.log(err.message);
    }
})();

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.dataTypes = DataTypes

db.Todo = Todo(db.sequelize, db.dataTypes);

module.exports = db;



