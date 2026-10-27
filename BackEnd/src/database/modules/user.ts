import {
  Model,
  DataTypes,
  Sequelize,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  ModelStatic,
} from "sequelize";

type Models = {
  Role: ModelStatic<Model>;
  UserRole: ModelStatic<Model>;
};

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare user_id: CreationOptional<number>;
declare first_name: string;
declare last_name: string;
declare email: string;
declare phone: CreationOptional<string | null>;
declare password_hash: string;
declare created_at: CreationOptional<Date>;
declare updated_at: CreationOptional<Date>;

  static associate(models: Models): void {
    User.belongsToMany(models.Role, {
      through: models.UserRole,
      foreignKey: "user_id",
      otherKey: "role_id",
    });

   
 
  }
}

export default (sequelize: Sequelize) => {
  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: DataTypes.STRING(100),
      last_name: DataTypes.STRING(100),
      email: DataTypes.STRING(255),
      phone: DataTypes.STRING(20),
      password_hash: DataTypes.STRING(255),
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};