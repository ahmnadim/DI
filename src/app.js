// app.js
require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

const port = process.env.PORT || 3000
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send(`Hello from node app on PORT: ${port}`)
})
// app.use("/api", userRoutes);

app.listen(port, () => {
    console.log('Server is running on http://localhost:', port)
})
