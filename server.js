const app = require("./src/app")
const envConfig = require("./src/config/config")
const db = require("./src/database/connection") // or we can do require("./src/database/connection")


const startServer = () => {
    const port = envConfig.portNumber
    app.listen(port,()=>{
        console.log(`Server has Started at Port ${port}`)
    })
}
startServer()