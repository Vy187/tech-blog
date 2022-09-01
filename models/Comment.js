const { Sequelize, Model, Datatypes } = require(`sequelize`);
const sequelize = require(`../config/config`);

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
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: true,
      references: {
        model: `User`,
        key: `id`
      }
    },
    post_id: {
      type: Datatypes.INTEGER,
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