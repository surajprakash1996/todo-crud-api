
module.exports = (sequelize,DataTypes) => {
    const Todo = sequelize.define("todo", {
        todoTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        todoDescription: {
            type: DataTypes.STRING
        }
    });
    return Todo;    
}

