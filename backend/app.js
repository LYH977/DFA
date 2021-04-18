const { config } = require('dotenv')
const express = require('express')

require('dotenv')/config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

const dfaRouter = require('./routes/dfa')

app.use('/api/dfa', dfaRouter)



app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})



