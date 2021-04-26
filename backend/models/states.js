const removeFirstChar = (str) =>{
    return str.substring(1)
}


const checkState_q0 = (input) =>{
    let firstChar =input.toLowerCase().charAt(0) 
    let process = `q0`
    switch(firstChar){
        case 'a':  
            process += ' > q1'
            return state_q1(removeFirstChar(input), process)
        case 'b':  
            process += ' > q14'
            return state_q14(removeFirstChar(input), process)
        case 'd':  
            process += ' > q20'
            return state_q20(removeFirstChar(input), process)
        case 'e':  
            process += ' > q25'
            return state_q25(removeFirstChar(input), process)
        case 'f':  
            process += ' > q30'
            return state_q30(removeFirstChar(input), process)          
        case 'l':  
            process += ' > q39'
            return state_q39(removeFirstChar(input), process)
        case 'n':  
            process += ' > q46'
            return state_q46(removeFirstChar(input), process)
        case 'o':  
            process += ' > q53'
            return state_q53(removeFirstChar(input), process)
        case 'q':  
            process += ' > q63'
            return state_q63(removeFirstChar(input), process)
        case 'r':  
            process += ' > q70'
            return state_q70(removeFirstChar(input), process)
        case 's':  
            process += ' > q77'
            return state_q77(removeFirstChar(input), process)
        case 't':  
            process += ' > q95'
            return state_q95(removeFirstChar(input), process)
        case 'u':  
            process += ' > q106'
            return state_q106(removeFirstChar(input), process)
        case 'w':  
            process += ' > q111'
            return state_q111(removeFirstChar(input), process)
        case 'y':  
            process += ' > q118'
            return state_q118(removeFirstChar(input), process)
        default:   
            process += ' > trapped state/rejected'
            return trapState(process)
    }
}

const trapState = (process)=>{
    return {
        isAccepted:false,
        pattern: null,
        process
    }
}
const acceptedState = (pattern, process)=>{
    return {
        isAccepted:true,
        pattern,
        process
    }
}

const state_q1 = (input, process)=>{
    let firstChar =input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 's': 
            process += ' > q2'
            return state_q2(removeFirstChar(input), process)
        case 'n': 
            process += ' > q7'            
            return state_q7(removeFirstChar(input), process)
        case 'f': 
            process += ' > q3'  
            return state_q3(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    }
}
const state_q2 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('as', process)
}

const state_q3 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 't': 
            process += ' > q4'
            return state_q4(removeFirstChar(input), process)
        default: 
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}



const state_q4 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process += ' > q5'
            return state_q5(removeFirstChar(input), process)
        default: 
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q5 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'r': 
            process += ' > q6'
            return state_q6(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}


const state_q6 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('after', process)
}


const state_q7 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'n': 
            process += ' > q8'
            return state_q8(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q8 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'u': 
            process += ' > q9'
            return state_q9(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q9 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'a': 
            process += ' > q10'
            return state_q10(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q10 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process += ' > q11'
            return state_q11(removeFirstChar(input), process)            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q11 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'l': 
                process += ' > q12'
                return state_q12(removeFirstChar(input), process)
            default:  
                process += ' > trapped state/rejected'
                return trapState(process)
        } 
    }
    process += ' (accepted)'
    return acceptedState('annual', process)
   
}

const state_q12 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'y': 
            process += ' > q13'
            return state_q13(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q13 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('annually', process)
}

const state_q14 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q15'
            return state_q15(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q15 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'f': 
            process += ' > q16'
            return state_q16(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q16 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process += ' > q17'
            return state_q17(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q17 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process += ' > q18'
            return state_q18(removeFirstChar(input), process)            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q18 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q19'
            return state_q19(removeFirstChar(input), process)            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q19 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('before', process)
}

const state_q20 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process += ' > q21'
            return state_q21(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q21 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'i': 
            process += ' > q22'
            return state_q22(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q22 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'l': 
            process += ' > q23'
            return state_q23(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q23 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q24'
            return state_q24(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q24 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('daily', process)
}

const state_q25 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process += ' > q26'
            return state_q26(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q26 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process += ' > q27'
            return state_q27(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q27 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process += ' > q28'
            return state_q28(removeFirstChar(input), process)            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q28 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q29'
            return state_q29(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q29 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('early', process)
}

const state_q30 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process += ' > q31'
            return state_q31(removeFirstChar(input), process)
        case 'u': 
            process += ' > q34'
            return state_q34(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q31 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 's': 
            process += ' > q32'
            return state_q32(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q32 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process += ' > q33'
            return state_q33(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q33 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('fast', process)
}

const state_q34 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process += ' > q35'
            return state_q35(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q35 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'u': 
            process += ' > q36'
            return state_q36(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q36 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process += ' > q37'
            return state_q37(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q37 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process += ' > q38'
            return state_q38(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q38 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('future', process)
}

const state_q39 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'a': 
            process += ' > q40'
            return state_q40(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q40 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process += ' > q41'
            return state_q41(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q41 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process += ' > q42'
            return state_q42(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}


const state_q42 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'r': 
                process += ' > q43'
                return state_q43(removeFirstChar(input), process)
            case 'l': 
                process += ' > q44'
                return state_q44(removeFirstChar(input), process)
            default:  
                process += ' > trapped state/rejected'
                return trapState(process)
        } 
    }
    process += ' (accepted)'
    return acceptedState('late', process)
   
}


const state_q43 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('later', process)
}

const state_q44 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q45'
            return state_q45(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q45 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('lately', process)
}


const state_q46 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process += ' > q51'
            return state_q51(removeFirstChar(input), process)
        case 'e': 
            process += ' > q47'
            return state_q47(removeFirstChar(input), process)    
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q47 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'v': 
            process += ' > q48'
            return state_q48(removeFirstChar(input), process)   
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q48 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q49'
            return state_q49(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q49 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process += ' > q50'
            return state_q50(removeFirstChar(input), process)

            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q50 = (input, process) => {
      if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('never', process)
}

const state_q51 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': 
            process += ' > q52'
            return state_q52(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q52 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('now', process)
}

const state_q53 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process += ' > q54'
            return state_q54(removeFirstChar(input), process)
        case 'n': 
            process += ' > q56'
            return state_q56(removeFirstChar(input), process)
        case 'f': 
            process += ' > q59'
            return state_q59(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q54 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'd': 
            process += ' > q55'
            return state_q55(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q55 = (input, process) => {
      if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('old', process)
}

const state_q56 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'c': 
            process += ' > q57'
            return state_q57(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q57 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q58'
            return state_q58(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q58 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('once', process)
}

const state_q59 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process += ' > q60'
            return state_q60(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}


const state_q60 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q61'
            return state_q61(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q61 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'n': 
            process += ' > q62'
            return state_q62(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q62= (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('often', process)
}

const state_q63 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'u': 
            process += ' > q64'
            return state_q64(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q64 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process += ' > q65'
            return state_q65(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q65 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'c': 
            process += ' > q66'
            return state_q66(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q66 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'k': 
            process += ' > q67'
            return state_q67(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q67 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'l': 
                process += ' > q68'
                return state_q68(removeFirstChar(input), process)
            default:  
                process += ' > trapped state/rejected'
                return trapState(process)
        } 
    }
    process += ' (accepted)'
    return acceptedState('quick', process)
   
}

const state_q68 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q69'
            return state_q69(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q69 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('quickly', process)
}

const state_q70 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process += ' > q71'
            return state_q71(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q71 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'p': 
            process += ' > q72'
            return state_q72(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q72 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process += ' > q73'
            return state_q73(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q73 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'd': 
            process += ' > q74'
            return state_q74(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q74 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'l': 
                process += ' > q75'
                return state_q75(removeFirstChar(input), process)
            default:  
                process += ' > trapped state/rejected'
                return trapState(process)
        } 
    }
    process += ' (accepted)'
    return acceptedState('rapid', process)
   
}

const state_q75 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q76'
            return state_q76(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q76 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('rapidly', process)
}

const state_q77 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process += ' > q78'
            return state_q78(removeFirstChar(input), process)
        case 'l': 
            process += ' > q82'
            return state_q82(removeFirstChar(input), process)
        case 'o': 
            process += ' > q87'
            return state_q87(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q78 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'n': 
            process += ' > q79'
            return state_q79(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q79 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'c': 
            process += ' > q80'
            return state_q80(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q80 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q81'
            return state_q81(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q81 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('since', process)
}

const state_q82 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process += ' > q83'
            return state_q83(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q83 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': 
            process += ' > q84'
            return state_q84(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q84 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'l': 
                process += ' > q85'
                return state_q85(removeFirstChar(input), process)
            default:  
                process += ' > trapped state/rejected'
                return trapState(process)
        } 
    }
    process += ' (accepted)'
    return acceptedState('slow', process)
   
}

const state_q85 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q86'
            return state_q86(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q86 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('slowly', process)
}

const state_q87 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'm': 
            process += ' > q88'
            return state_q88(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q88 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q89'
            return state_q89(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q89 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process += ' > q90'
            return state_q90(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q90 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process += ' > q91'
            return state_q91(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q91 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'm': 
            process += ' > q92'
            return state_q92(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q92 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process += ' > q93'
            return state_q93(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q93 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 's': 
            process += ' > q94'
            return state_q94(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q94 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('sometimes', process)
}

const state_q95 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process += ' > q96'
            return state_q96(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q96 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'd': 
            process += ' > q97'
            return state_q97(removeFirstChar(input), process)
        case 'm': 
            process += ' > q100'
            return state_q100(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q97 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process += ' > q98'
            return state_q98(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q98 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process += ' > q99'
            return state_q99(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q99 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('today', process)
}

const state_q100 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process += ' > q101'
            return state_q101(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q101 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process += ' > q102'
            return state_q102(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q102 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process += ' > q103'
            return state_q103(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q103 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process += ' > q104'
            return state_q104(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q104 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': 
            process += ' > q105'
            return state_q105(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}


const state_q105 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('tomorrow', process)
}


const state_q106 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'n': 
            process += ' > q107'
            return state_q107(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q107 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process += ' > q108'
            return state_q108(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q108 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process += ' > q109'
            return state_q109(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q109 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process += ' > q110'
            return state_q110(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q110 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('until', process)
}

const state_q111 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': 
            process += ' > q112'
            return state_q112(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q112 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process += ' > q115'
            return state_q115(removeFirstChar(input), process)
        case 'e': 
            process += ' > q113'
            return state_q113(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q113 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'n': 
            process += ' > q114'
            return state_q114(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q114 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('when', process)
}

const state_q115 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process += ' > q116'
            return state_q116(removeFirstChar(input), process)
            
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q116 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process += ' > q117'
            return state_q117(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q117 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('while', process)
}

const state_q118 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process += ' > q119'
            return state_q119(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q119 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 's': 
            process += ' > q120'
            return state_q120(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q120 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 't': 
            process += ' > q121'
            return state_q121(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q121 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process += ' > q122'
            return state_q122(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q122 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'r': 
            process += ' > q123'
            return state_q123(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q123 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'd': 
            process += ' > q124'
            return state_q124(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q124 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'a': 
            process += ' > q125'
            return state_q125(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q125 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'y': 
            process += ' > q126'
            return state_q126(removeFirstChar(input), process)
        default:  
            process += ' > trapped state/rejected'
            return trapState(process)
    } 
}

const state_q126 = (input, process) => {
   if(input) {
       process += ' > trapped state/rejected'
        return trapState(process)
    }
    process += ' (accepted)'
    return acceptedState('yesterday', process)
}
/////////////////////////////////////////



module.exports = checkState_q0