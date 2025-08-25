const {Sequelize, DataTypes} = require ("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_URL,{dialect:"postgres", dialectOptions:{ssl:{require:true, rejectUnauthorized:false}}}) 

sequelize.authenticate()
.then(()=>{
    console.log("Database Connection Successful")
})
.catch((error)=>{
    console.log(`Unable to Connect Database ${error}`)
})
const db = {
    // Sequelize : Sequelize,
    // sequelize : sequelize
}
//or we can do like below
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./modules/user-model")(sequelize, DataTypes) //imported from user-model.js
db.products = require("./modules/product-model")(sequelize, DataTypes) //imported from product-model.js

sequelize.sync({alter : true}) //alter:true is used to update the existing table without dropping it
.then(()=>{
    console.log("All Models(tables) are Synced or Migrated Successfully with Database")
})
.catch((error)=>{
    console.log(`Error in Model(tables) Syncing or Unable to Migrate : ${error}`)
})




module.exports = db