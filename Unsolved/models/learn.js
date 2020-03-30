module.exports = function (sequelize, DataTypes) {
  var Learn = sequelize.define("Learn", {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    link: {
      type: DataTypes.STRING,
      unique: true
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {

    timestamps: false
  });
  return Learn;
};