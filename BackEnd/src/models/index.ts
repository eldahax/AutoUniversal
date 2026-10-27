import sequelize from "../config/database";

import UserModel from "../database/modules/user";
import RoleModel from "../database/modules/role";
import UserRoleModel from "../database/modules/userRoles";

const User = UserModel(sequelize);
const Role = RoleModel(sequelize);
const UserRole = UserRoleModel(sequelize);

const models = {
  User,
  Role,
  UserRole,
};

Object.values(models).forEach((model) => {
  if ("associate" in model && typeof model.associate === "function") {
    model.associate(models);
  }
});

export { sequelize };
export default models;