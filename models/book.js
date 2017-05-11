module.exports = (sequelize, DataType) => {
    var Book = sequelize.define('Book', {
        title: {
            type: DataType.STRING
        }
    }, {
            freezeTableName: true,
            classMethod: {
                associate: (models) => {
                    Book.belongsTo(models.Library)
                }
            }
        })
    return Book
}