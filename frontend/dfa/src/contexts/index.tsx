import React, {useContext, useState} from 'react'

const TestContext = React.createContext<any>(null)




export const ContextProvider:React.FC  = ({children}) =>{

    const [state, setstate] = useState<any>()

    return (
        <TestContext.Provider value ={state}>
            {children}
        </TestContext.Provider>
    )
}