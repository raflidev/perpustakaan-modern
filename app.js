const express = require("express")
const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

const routes = require("./src/routes/index")

// Connect Database
require('./src/utils/MongoConnect')

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Localhost berjalan di http://localhost:${port}`);
})