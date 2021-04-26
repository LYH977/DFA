const router = require('express').Router()
const ACCEPTED_LANGUAGE_SCOPE = require('../models/language')
const checkState_q0 = require('../models/states')
const NEWLINE_REGEX = /(\r?\n)/

router.route('/result').post( async(req, res) => {
    try{
        let inputString = req.body.inputString
        let stringArray = inputString.split(/(\W+)/);
        let result = processDFA(stringArray)
        // await sleep(3000);
        return res.json(result)
    }
    catch(error){
        console.log(error)
        return res.json(error)
    }
})

router.route('/test').get( async(req, res) => {
    try{
        let text = "\n"
        let regex = /(\r?\n)/
        let stringArray = text.split(regex);
        let test1 = regex.test(text)
        let test2 = text.match(regex)
        return res.json({stringArray, test1, test2})
    }
    catch(error){
        console.log(error)
        return res.json(error)
    }
})

router.route('/languages').get( async(req, res) =>{
    const keys = Object.keys(ACCEPTED_LANGUAGE_SCOPE)
    let list=[]

    for( let i=0; i<keys.length ; i++){
        key = keys[i]
        for( let j =0; j<ACCEPTED_LANGUAGE_SCOPE[key].length ; j++){
            list.push(ACCEPTED_LANGUAGE_SCOPE[key][j])
        }
    }
    return res.json({list})
})

// const processDFA1 = (stringArray) => {
//         const formattedString = []
//         const patterns = {}
//         for(let i=0 ; i<stringArray.length ; i++){                                  // for each word in the string (' baebe because  Eren and Mikasa are very happy! or \nsad?')
//             let isAccepted = false
//             let word = stringArray[i].toLowerCase()
//             let firstChar =word.charAt(0) 
//             let lang = null
//             if(SMALL_AlPHA_REGEX.test(firstChar)){                                            //check first character within [a-z]
//                 lang = ACCEPTED_LANGUAGE_SCOPE[firstChar][0]
//                  for(let j=0 ; j<word.length ; j++){                                // for each char in the word 
//                     if(word[j] === lang[j]){
//                         if(j === word.length-1 && j === lang.length-1 ){
//                             isAccepted = true
//                             break
//                         }
//                         continue
//                     }
//                     break //rejected/trapped
//                  }
//             }
//             if(NEWLINE_REGEX.test(word)){
//                 let symbolArray = word.split(NEWLINE_REGEX);
//             }
//             formattedString.push({
//                 name: stringArray[i],
//                 isAccepted,
//                 pattern: isAccepted?lang: null
//             })
//              if (isAccepted){
//                 if(patterns.hasOwnProperty(lang)){  patterns[lang]['occurence']++   }
//                 else{   patterns[lang] = {occurence:1, isChecked:false}   }
//             }
//         }
//         return {formattedString, patterns}
// }

const processDFA = (stringArray) => {
        let formattedString = []
        let patterns = {}
        let index = 0
        for(let i=0 ; i<stringArray.length ; i++){                   // for each word in the string          (' baebe because  Eren and Mikasa are very happy! or \nsad?')
            let word = stringArray[i].toLowerCase()

             if (NEWLINE_REGEX.test(word)){ // check newline
                let symbolArray = word.split(NEWLINE_REGEX);
                for(let j=0 ; j<symbolArray.length ; j++){
                    if(symbolArray[j].length === 0 )  continue;
                    formattedString.push({
                        name: symbolArray[j],
                        isAccepted: false,
                        pattern:  null,
                        process: '',
                        index
                    })
                    index++
                }
                continue
            }

            let result = checkState_q0(word)
            formattedString.push({
                ...result,
                index,
                name: stringArray[i]
                
            })
             if (result.isAccepted){
                if(patterns.hasOwnProperty(result.pattern)){  patterns[result.pattern]['occurence']++   }
                else{   patterns[result.pattern] = {occurence:1, isChecked:false}   }
            }
            index++
        }
        return {formattedString, patterns}

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

module.exports = router