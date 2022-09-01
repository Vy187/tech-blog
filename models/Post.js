const { Sequelize, Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/config`);

class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncremnet: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: true,
      references: {
        model: `User`,
        key: `id`
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: `Post`
  }
);

module.exports = Post;