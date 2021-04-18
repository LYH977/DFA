// const { config } = require('dotenv')
// const express = require('express')

// require('dotenv')/config()

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())

// const dfaRouter = require('./routes/dfa')

// app.use('/dfa', dfaRouter)



// app.listen(port, () =>{
//     console.log(`server running on port ${port}`)
// })



const ACCEPTED_LANGUAGE = [ 'and', 'because', 'can']
const inputString = ' bebe because  Eren and Mikasa are very happy! or \nsad?'
const stringArray = inputString.split(/(\s+)/);
const acceptedObj = {}
for(let i=0 ; i<stringArray.length ; i++){                   // for each word in the string          (' baebe because  Eren and Mikasa are very happy! or \nsad?')
    for(let j=0 ; j<ACCEPTED_LANGUAGE.length ; j++){         // for each accepted language           ( [ 'baebe', 'because', 'can'] )
        let isAccepted = false
        let pointer = 0
        let word = stringArray[i]
        let language = ACCEPTED_LANGUAGE[j]
        for(let k=0 ; k<word.length ; k++){                  // for each character in the word       ( baebe )
            if(word[k] !== language[pointer]){ // move pointer back to first character of accepted language
                pointer = 0
                continue
            }
            pointer++
            if(pointer === language.length ){ //check if it is in accepted state
                isAccepted = true
                break
            }
        }
        if (isAccepted){
            position = i // position of accepted word in the string
            if(acceptedObj.hasOwnProperty(language)){
                acceptedObj[language].push(position)
            }
            else{
                acceptedObj[language] = [position]
            }
        }
    }
}