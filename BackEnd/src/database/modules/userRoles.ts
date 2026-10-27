import {
  Model,
  DataTypes,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  ModelStatic,
} from "sequelize";

type Models = {
  User: ModelStatic<Model>;
  Role: ModelStatic<Model>;
};

class UserRole extends Model<
  InferAttributes<UserRole>,
  InferCreationAttributes<UserRole>
> {
  declare user_id: number;
  declare role_id: number;

  static associate(models: Models): void {
    UserRole.belongsTo(models.User, {
      foreignKey: "user_id",
    });

    UserRole.belongsTo(models.Role, {
      foreignKey: "role_id",
    });
  }
}

export default (sequelize: Sequelize) => {
  UserRole.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
      },
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "roles",
          key: "role_id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      tableName: "user_roles",
      timestamps: false,
    }
  );

  return UserRole;
};