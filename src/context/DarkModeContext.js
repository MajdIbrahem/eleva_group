import { createContext, useState } from 'react';
export const DarkModeContext=createContext()

const DarkModeProvider = (props) => {
    const [dark,setDark]=useState(true)
    return (
        < DarkModeContext.Provider value={{ dark, setDark }}>{ props.children}</DarkModeContext.Provider>
)
}

export default DarkModeProvider