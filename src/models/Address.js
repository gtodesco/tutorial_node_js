const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) { // Poderia ser static init(connection)
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize       // Poderia ser sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Address;