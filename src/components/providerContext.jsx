import {useState, createContext} from 'react'

export const GetData = createContext()

export default function ProviderContext({children}) {
    const [value, setValue] = useState()
    const props = {
        value,
        setValue
    }
    return (
        <GetData.Provider value={props}>
            {children}
        </GetData.Provider>
    )
}
