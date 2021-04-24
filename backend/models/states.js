const checkState_q0 = (input) =>{
    let firstChar =input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'a':  return state_q1(input.substring(1))
        case 'b':  return state_q9(input.substring(1))
        case 'c':  return state_q12(input.substring(1))
        case 'd':  return state_q19(input.substring(1))
        case 'e':  return state_q27(input.substring(1))
        case 'g':  return state_q33(input.substring(1))
        case 'h':  return state_q37(input.substring(1))
        case 'i':  return state_q40(input.substring(1))
        case 'l':  return state_q43(input.substring(1))
        case 'n':  return state_q48(input.substring(1))
        case 's':  return state_q52(input.substring(1))
        case 't':  return state_q56(input.substring(1))
        case 'v':  return state_q62(input.substring(1))
        case 'w':  return state_q66(input.substring(1))
        default:   return trapState()
    }
}

const trapState = ()=>{
    return {
        isAccepted:false,
        pattern: null
    }
}
const acceptedState = (pattern)=>{
    return {
        isAccepted:true,
        pattern
    }
}

const state_q1 = (input)=>{
    let firstChar =input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 's': return state_q4(input.substring(1))
        case 'n': return state_q2(input.substring(1))
        case 'f': return state_q5(input.substring(1))
        default:  return trapState()
    }
}

const state_q2 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'd': return state_q3(input.substring(1))
        default: return trapState()
    } 
}

const state_q3 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('and')
}

const state_q4 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('as')
}

const state_q5 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 't': return state_q6(input.substring(1))
        default: return trapState()
    } 
}

const state_q6 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'e': return state_q7(input.substring(1))
        default: return trapState()
    } 
}

const state_q7 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'r': return state_q8(input.substring(1))
        default: return trapState()
    } 
}

const state_q8 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('after')
}

const state_q9 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'u': return state_q10(input.substring(1))
        default: return trapState()
    } 
}

const state_q10 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': return state_q11(input.substring(1))            
        default: return trapState()
    } 
}

const state_q11 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('but')
}

const state_q12 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': return state_q13(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q13 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q14(input.substring(1))            
        default: return trapState()
    } 
}

const state_q14 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': return state_q15(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q15 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q16(input.substring(1))
            
        default: return trapState()
    } 
}

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

const state_q17 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': return state_q18(input.substring(1))            
        default: return trapState()
    } 
}

const state_q18 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('clearly')
}

const state_q19 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q20(input.substring(1))
        case 'a': return state_q23(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q20 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': return state_q21(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q21 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        case 'n': return state_q22(input.substring(1))
        default: return trapState()
    } 
}

const state_q22 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('down')
}

const state_q23 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': return state_q24(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q24 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': return state_q25(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q25 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': return state_q26(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q26 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('daily')
}

const state_q27 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': return state_q28(input.substring(1))            
        default: return trapState()
    } 
}

const state_q28 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 's': return state_q29(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q29 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'i': return state_q30(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q30 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'l': return state_q31(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q31 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': return state_q32(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q32 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('easily')
}

const state_q33 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q34(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q34 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q35(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q35 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'd': return state_q36(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q36 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('good')
}

const state_q37 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q38(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q38 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': return state_q39(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q39 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('how')
}

const state_q40 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'f': return state_q41(input.substring(1))
        case 'n': return state_q42(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q41 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('if')
}


const state_q42= (input) => {
      if(input) 
        return trapState()
    return acceptedState('in')
}
const state_q43 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': return state_q44(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q44 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': return state_q45(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q45 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q46(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q46 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q47(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q47 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('later')
}

const state_q48 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q49(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q49 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'w': return state_q50(input.substring(1))
        case 't': return state_q51(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q50 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('now')
}

const state_q51 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('not')
}

const state_q52 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q53(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q53 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'm': return state_q54(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q54 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q55(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q55 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('some')
}

const state_q56 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': return state_q57(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q57 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'a': return state_q58(input.substring(1))
        case 'e': return state_q60(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q58 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 't': return state_q59(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q59 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('that')
}


const state_q60 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'n': return state_q61(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q61 = (input) => {
      if(input) 
        return trapState()
    return acceptedState('then')
}

const state_q62 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q63(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q63 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q64(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q64 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'y': return state_q65(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q65 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('very')
}

const state_q66 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': return state_q67(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q67= (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'o': return state_q68(input.substring(1))
        case 'e': return state_q73(input.substring(1))
        case 'i': return state_q79(input.substring(1))
 
        default: return trapState()
    } 
}

const state_q68 = (input) => {
   if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'e': return state_q69(input.substring(1))
            default: return trapState()
        } 
    }
    return acceptedState('who')
}

const state_q69 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'v': return state_q70(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q70 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q71(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q71 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q72(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q72 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('whoever')
}

const state_q73 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q74(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q74 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q75(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q75 = (input) => {
   if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'v': return state_q76(input.substring(1))
            default: return trapState()
        } 
    }
    return acceptedState('where')
}

const state_q76 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q77(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q77 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q78(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q78 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('wherever')
}

const state_q79 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'c': return state_q80(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q80 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'h': return state_q81(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q81 = (input) => {
    if(input) {
        let firstChar = input.toLowerCase().charAt(0) 
        switch(firstChar){
            case 'e': return state_q82(input.substring(1))
            default: return trapState()
        } 
    }
    return acceptedState('which')
}

const state_q82 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'v': return state_q83(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q83 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'e': return state_q84(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q84 = (input) => {
   let firstChar = input.toLowerCase().charAt(0) 
    switch(firstChar){
        
        case 'r': return state_q85(input.substring(1))
            
        default: return trapState()
    } 
}

const state_q85 = (input) => {
   if(input) 
        return trapState()
    return acceptedState('whichever')
}
/////////////////////////////////////////



module.exports = checkState_q0