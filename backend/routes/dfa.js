const router = require('express').Router()
const ACCEPTED_LANGUAGE = [ 'and', 'because', 'can']

router.route('/').get( async(req, res) => {
    // const inputString = req.body.inputString
    const inputString = ' bebe because  Eren and Mikasa are very happy! or \nsad?'
    const stringArray = inputString.split(/(\s+)/);
    const acceptedObj = processDFA(stringArray)
    await sleep(5000);
    // const test = {name: 'Eren'}
    res.json(acceptedObj)
})

const processDFA = (stringArray) => {
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
                if(acceptedObj.hasOwnProperty(language)){  acceptedObj[language].push(position)   }
                else{   acceptedObj[language] = [position]   }
            }
        }
    }
    return acceptedObj
}

module.exports = router