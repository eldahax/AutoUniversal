'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("userRoles",{
    user_id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      references:{
        model:"users",
        key:"user_id"
      },
      onDelete:"CASCADE"
    },
    role_id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      references:{
        model:"roles",
        key:"role_id"
      },
      onDelete:"CASCADE",
    }
   })
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable("user_roles")
  }
};
