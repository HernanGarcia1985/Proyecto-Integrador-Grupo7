module.exports = (sequelize,DataTypes) => {

    let alias = "Categoria";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        typeCategory: {
            type: DataTypes.STRING,
            null: false
        }
    }

    let config = {
        tableName: "categoria",
        timestamps: false
    }

    const Categoria = sequelize.define (alias,cols,config);
    return Categoria;
}