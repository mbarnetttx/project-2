module.exports = function (sequelize, DataTypes) {
  var Learn = sequelize.define("Learn", {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    link: {
      type: DataTypes.STRING,
      unique: true
    },
    likes: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return Learn;
};
