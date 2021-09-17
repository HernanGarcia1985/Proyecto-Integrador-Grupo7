module.exports = (sequelize,DataTypes) => {

    let alias = "Producto";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        name: {
            type: DataTypes.STRING,
            null: false
        },
        price: {
            type: DataTypes.DOUBLE,
            null: false
        },
        discount: {
            type: DataTypes.INTEGER,
            null: false
        },
        description: {
            type: DataTypes.TEXT,
            null: false
        },
        image: {
            type: DataTypes.STRING,
            null: false
        },
        qty: {
            type: DataTypes.INTEGER,
            null: false
        },
        createDate: {
            type: DataTypes.DATEONLY,
            null: false
        },
        removeDate: {
            type: DataTypes.DATEONLY,
            null: true,
            default: null
        },
        id_animal: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
            default: null
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
            default: null
        }
    }

    let config = {
        tableName: "producto",
        timestamps: false
    }

    const Producto = sequelize.define (alias,cols,config);
    return Producto;
}