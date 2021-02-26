const express = require("express")
const app = express()
const PORT = process.env.PORT || 3030
const rout_path = require("./routes/User")

require("./connection/config")

app.use(express.json())
app.use("/",rout_path)

app.listen(PORT,console.log(`server is running on port ${PORT}`))