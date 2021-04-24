const { config } = require('dotenv')
const express = require('express')
const cors = require('cors')

require('dotenv')/config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const dfaRouter = require('./routes/dfa')

app.use('/api/dfa', dfaRouter)



app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})



   if(input) 
        return trapState()
    return acceptedState('and')

    const state_q16 = (input) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'l': return state_q17(input.substring(1))
            default: return trapState()
        } 
    }
    return acceptedState('clear')
   
}