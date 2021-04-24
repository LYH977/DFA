const removeFirstChar = (str) =>{
    return str.substring(1)
}


const checkState_q0 = (input) =>{
    let firstChar =input.toLowerCase().charAt(0) 
    let process = `${firstChar}`
    switch(firstChar){
        case 'a':  
            process = process + ' > q1'
            return state_q1(removeFirstChar(input), process)
        case 'b':  
            process = process + ' > q9'
            return state_q9(removeFirstChar(input), process)
        case 'c':  
            process = process + ' > q12'
            return state_q12(removeFirstChar(input), process)
        case 'd':  
            process = process + ' > q19'
            return state_q19(removeFirstChar(input), process)
        case 'e':  
            process = process + ' > q27'
            return state_q27(removeFirstChar(input), process)
        case 'g':  
            process = process + ' > q33'
            return state_q33(removeFirstChar(input), process)
        case 'h':  
            process = process + ' > q37'
            return state_q37(removeFirstChar(input), process)
        case 'i':  
            process = process + ' > q40'
            return state_q40(removeFirstChar(input), process)
        case 'l':  
            process = process + ' > q43'
            return state_q43(removeFirstChar(input), process)
        case 'n':  
            process = process + ' > q48'
            return state_q48(removeFirstChar(input), process)
        case 's':  
            process = process + ' > q52'
            return state_q52(removeFirstChar(input), process)
        case 't':  
            process = process + ' > q56'
            return state_q56(removeFirstChar(input), process)
        case 'v':  
            process = process + ' > q62'
            return state_q62(removeFirstChar(input), process)
        case 'w':  
            process = process + ' > q66'
            return state_q66(removeFirstChar(input), process)
        default:   
            process = process + ' > trapped state / rejected'
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
            process = process + ' > q4'
            return state_q4(removeFirstChar(input), process)
        case 'n': 
            process = process + ' > q2'            
            return state_q2(removeFirstChar(input), process)
        case 'f': 
            process = process + ' > q5'  
            return state_q5(removeFirstChar(input), process)
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    }
}

const state_q2 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'd': 
            process = process + ' > q3'
            return state_q3(removeFirstChar(input), process)
        default: 
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q3 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('and', process)
}

const state_q4 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('as', process)
}

const state_q5 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 't': 
            process = process + ' > q6'
            return state_q6(removeFirstChar(input), process)
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q6 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': 
            process = process + ' > q7'
            return state_q7(removeFirstChar(input), process)
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q7 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'r': 
            process = process + ' > q8'
            return state_q8(removeFirstChar(input), process)
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q8 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('after', process)
}

const state_q9 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'u': 
            process = process + ' > q10'
            return state_q10(removeFirstChar(input), process)
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q10 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process = process + ' > q11'
            return state_q11(removeFirstChar(input), process)            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q11 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('but', process)
}

const state_q12 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process = process + ' > q13'
            return state_q13(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q13 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q14'
            return state_q14(removeFirstChar(input), process)            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q14 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process = process + ' > q15'
            return state_q15(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q15 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q16'
            return state_q16(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q16 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'l': 
            process = process + ' > q17'
            return state_q17(removeFirstChar(input), process)
            default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
        } 
    }
    process = process + ' (accepted)'
    return acceptedState('clear', process)
   
}

const state_q17 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process = process + ' > q18'
            return state_q18(removeFirstChar(input), process)            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q18 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('clearly', process)
}

const state_q19 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q20'
            return state_q20(removeFirstChar(input), process)
        case 'a': 
            process = process + ' > q23'
            return state_q23(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q20 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': 
            process = process + ' > q21'
            return state_q21(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q21 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'n': 
            process = process + ' > q22'
            return state_q22(removeFirstChar(input), process)
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q22 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('down', process)
}

const state_q23 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process = process + ' > q24'
            return state_q24(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q24 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process = process + ' > q25'
            return state_q25(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q25 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process = process + ' > q26'
            return state_q26(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q26 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('daily', process)
}

const state_q27 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process = process + ' > q28'
            return state_q28(removeFirstChar(input), process)            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q28 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 's': 
            process = process + ' > q29'
            return state_q29(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q29 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': 
            process = process + ' > q30'
            return state_q30(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q30 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': 
            process = process + ' > q31'
            return state_q31(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q31 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process = process + ' > q32'
            return state_q32(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q32 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('easily', process)
}

const state_q33 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q34'
            return state_q34(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q34 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q35'
            return state_q35(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q35 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'd': 
            process = process + ' > q36'
            return state_q36(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q36 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('good', process)
}

const state_q37 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q38'
            return state_q38(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q38 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': 
            process = process + ' > q39'
            return state_q39(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q39 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('how', process)
}

const state_q40 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'f': 
            process = process + ' > q41'
            return state_q41(removeFirstChar(input), process)
        case 'n': 
            process = process + ' > q42'
            return state_q42(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q41 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('if', process)
}


const state_q42= (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('in', process)
}
const state_q43 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process = process + ' > q44'
            return state_q44(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q44 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process = process + ' > q45'
            return state_q45(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q45 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q46'
            return state_q46(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q46 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q47'
            return state_q47(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q47 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('later', process)
}

const state_q48 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q49'
            return state_q49(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q49 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': 
            process = process + ' > q50'
            return state_q50(removeFirstChar(input), process)
        case 't': 
            process = process + ' > q51'
            return state_q51(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q50 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('now', process)
}

const state_q51 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('not', process)
}

const state_q52 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q53'
            return state_q53(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q53 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'm': 
            process = process + ' > q54'
            return state_q54(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q54 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q55'
            return state_q55(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q55 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('some', process)
}

const state_q56 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': 
            process = process + ' > q57'
            return state_q57(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q57 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': 
            process = process + ' > q58'
            return state_q58(removeFirstChar(input), process)
        case 'e': 
            process = process + ' > q60'
            return state_q60(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q58 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': 
            process = process + ' > q59'
            return state_q59(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q59 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('that', process)
}


const state_q60 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'n': 
            process = process + ' > q61'
            return state_q61(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q61 = (input, process) => {
      if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('then', process)
}

const state_q62 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q63'
            return state_q63(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q63 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q64'
            return state_q64(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q64 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': 
            process = process + ' > q65'
            return state_q65(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q65 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('very', process)
}

const state_q66 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': 
            process = process + ' > q67'
            return state_q67(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q67= (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': 
            process = process + ' > q68'
            return state_q68(removeFirstChar(input), process)
        case 'e': 
            process = process + ' > q73'
            return state_q73(removeFirstChar(input), process)
        case 'i': 
            process = process + ' > q79'
            return state_q79(removeFirstChar(input), process)
 
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q68 = (input, process) => {
   if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'e': 
            process = process + ' > q69'
            return state_q69(removeFirstChar(input), process)
            default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
        } 
    }
    process = process + ' (accepted)'
    return acceptedState('who', process)
}

const state_q69 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'v': 
            process = process + ' > q70'
            return state_q70(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q70 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q71'
            return state_q71(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q71 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q72'
            return state_q72(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q72 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('whoever', process)
}

const state_q73 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q74'
            return state_q74(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q74 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q75'
            return state_q75(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q75 = (input, process) => {
   if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'v': 
            process = process + ' > q76'
            return state_q76(removeFirstChar(input), process)
            default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
        } 
    }
    process = process + ' (accepted)'
    return acceptedState('where', process)
}

const state_q76 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q77'
            return state_q77(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q77 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q78'
            return state_q78(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q78 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('wherever', process)
}

const state_q79 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'c': 
            process = process + ' > q80'
            return state_q80(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q80 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': 
            process = process + ' > q81'
            return state_q81(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q81 = (input, process) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'e': 
            process = process + ' > q82'
            return state_q82(removeFirstChar(input), process)
            default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
        } 
    }
    process = process + ' (accepted)'
    return acceptedState('which', process)
}

const state_q82 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'v': 
            process = process + ' > q83'
            return state_q83(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q83 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': 
            process = process + ' > q84'
            return state_q84(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q84 = (input, process) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': 
            process = process + ' > q85'
            return state_q85(removeFirstChar(input), process)
            
        default:  
            process = process + ' > trapped state / rejected'
            return trapState(process)
    } 
}

const state_q85 = (input, process) => {
   if(input) {
       process = process + ' > trapped state / rejected'
        return trapState(process)
    }
    process = process + ' (accepted)'
    return acceptedState('whichever', process)
}
/////////////////////////////////////////



module.exports = checkState_q0