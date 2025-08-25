const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role : {
      type: DataTypes.ENUM('admin', 'seller', 'customer', 'superadmin'),
      allowNull: false,
      defaultValue: "customer"
    }
})

  return User;
}

module.exports = userModel;