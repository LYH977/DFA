const router = require('express').Router()
const ACCEPTED_LANGUAGE_OBJ = require('../models/language')

router.route('/result').post( async(req, res) => {
    try{
        const inputString = req.body.inputString
        const stringArray = inputString.split(/(\W+)/);
        const result = processDFA(stringArray)
        // await sleep(3000);
        return res.json(result)
    }
    catch(error){
        console.log('erer')
        return res.json(error)
    }
})

router.route('/languages').get( async(req, res) =>{
    const keys = Object.keys(ACCEPTED_LANGUAGE_OBJ)
    let list=[]

    for( let i=0; i<keys.length ; i++){
        key = keys[i]
        for( let j =0; j<ACCEPTED_LANGUAGE_OBJ[key].length ; j++){
            list.push(ACCEPTED_LANGUAGE_OBJ[key][j])
        }
    }
    // console.log(list)
    return res.json({list})
})

const processDFA = (stringArray) => {
        const formattedString = []
        const patterns = {}
        for(let i=0 ; i<stringArray.length ; i++){                   // for each word in the string          (' baebe because  Eren and Mikasa are very happy! or \nsad?')
            let isAccepted = false
            let word = stringArray[i].toLowerCase()
            let firstChar =word.charAt(0) 
            let lang = null
            if(/[a-z]/.test(firstChar)){    //check first character within [a-z]
                lang = ACCEPTED_LANGUAGE_OBJ[firstChar][0]
                 for(let j=0 ; j<word.length ; j++){                     // for each char in the word 
                    if(word[j] === lang[j]){
                        if(j === word.length-1 && j === lang.length-1 ){
                            isAccepted = true
                            break
                        }
                        continue
                    }
                    break //rejected/trapped
                 }
            }
            formattedString.push({
                name: stringArray[i],
                isAccepted,
                pattern: isAccepted?lang: null
            })
             if (isAccepted){
                if(patterns.hasOwnProperty(lang)){  patterns[lang]['occurence']++   }
                else{   patterns[lang] = {occurence:1, isChecked:false}   }
            }
        }
        return {formattedString, patterns}

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

module.exports = router