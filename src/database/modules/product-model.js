const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ProductPrice : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ProductImage:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ProductDescription:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ProductStock : {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
})

  return Product;
}
module.exports = productModel;