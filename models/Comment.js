const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncremnet: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: `User`,
        key: `id`
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: `Post`,
        key: `id`
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: `Comment`
  }
);

module.exports = Comment;