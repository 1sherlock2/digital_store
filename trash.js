const sequelizeTable = (modelName, arg) => {
    return sequelize.define(modelName, {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        arg,
    })
}

const User = sequelizeTable('user', {
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'user' },
})

const Basket = sequelizeTable('basket', {
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
})

const BasketDevice = sequelizeTable('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Device = sequelizeTable('device', {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING },
})

const Type = sequelizeTable('type', {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

const Brand = sequelizeTable('brand', {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

const Rating = sequelizeTable('rating', {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
})

const DeviceInfo = sequelizeTable('device_info', {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
    title: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT },
})
