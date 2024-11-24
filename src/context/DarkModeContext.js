import { createContext, useState } from 'react';
export const DarkModeContext=createContext()

const DarkModeProvider = (props) => {
    const [dark,setDark]=useState(false)
    return (
        < DarkModeContext.Provider value={{ dark, setDark }}>{ props.children}</DarkModeContext.Provider>
)
}

export default DarkModeProvider