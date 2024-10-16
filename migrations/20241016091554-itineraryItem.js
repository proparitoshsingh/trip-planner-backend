'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("itineraryItems", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      itineraryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "itineraries",
          key: "id",
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      itemId: Sequelize.INTEGER,
      type: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("itineraryItems");
  },
};
