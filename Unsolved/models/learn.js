module.exports = function(sequelize, DataTypes) {
  var Learn = sequelize.define("Learn", {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    link: DataTypes.STRING,
  },{
    timestamps: false
  });
  return Learn;
};
