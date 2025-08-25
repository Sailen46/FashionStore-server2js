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
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db