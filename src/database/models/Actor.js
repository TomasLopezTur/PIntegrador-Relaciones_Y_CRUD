module.exports = (sequelize, DataTypes) =>{

    const alias = 'Actor';
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3,1),
            allowNull: false,
        },
        favorite_movie_id:{
            type: DataTypes.INTEGER.UNSIGNED
        }
    }
    const config ={
        tableName: 'actors',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        //
    }

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie",
            foreignKey:"actor_id",
            otherKey:"movie_id",
            timestamps: false,
        })
    }

    return Actor;

};