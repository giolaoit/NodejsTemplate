module.exports = (sequelize, DataType) => {
    var Library = sequelize.define('Library', {

    }, {
            freezeTableName: true,
            classMethods: {
                associate: (models) => {
                    Library.hasMany(models.Book)
                }
            }
        })
    return Library
}