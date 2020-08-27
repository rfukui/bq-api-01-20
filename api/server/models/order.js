'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    client: DataTypes.STRING,
    table: DataTypes.DECIMAL(10,2),
    items: DataTypes.VIRTUAL
    }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Products_x_Order,{
      foreignKey: 'orderId'
    })
  };
  return Order;
};
