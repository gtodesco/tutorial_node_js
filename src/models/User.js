const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) { // Poderia ser static init(connection)
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize       // Poderia ser sequelize: connection
        })
    }
}

module.exports = User;