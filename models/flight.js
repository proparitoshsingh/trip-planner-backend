module.exports = (sequelize, DataTypes) => {
   const flight = sequelize.define(
      "flight",
      {
         origin: DataTypes.STRING,
         desination: DataTypes.STRING,
         flight_number: DataTypes.STRING,
         departure_time: DataTypes.DATE,
         arrival_time: DataTypes.DATE,
         price: DataTypes.FLOAT,
      },
      {
         timestamps: true,
      }
   );
   return flight;
};

