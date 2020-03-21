module.exports = function(sequelize, DataTypes) {
  var Learn = sequelize.define("Learn", {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    link: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  return Learn;
};
