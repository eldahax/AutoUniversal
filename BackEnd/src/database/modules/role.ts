import {
  Model,
  DataTypes,
  Sequelize,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
  declare role_id: CreationOptional<number>;
  declare role_name: string;
}

export default (sequelize: Sequelize) => {
  Role.init(
    {
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "role",
      timestamps: false,
    }
  );

  return Role;
};