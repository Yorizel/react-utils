import React, { createContext } from 'react'
import { Template } from './Template'

interface ForProps {
    array: any[]
}
export const ForContext = createContext({} as any)
export const For: React.FC<ForProps> = ({ array, children }) => {
    return (
        <Template>
            {Array.from(array, (item, index) => (
                <ForContext.Provider value={item} key={index}>
                    <ForContext.Consumer>{children as any}</ForContext.Consumer>
                </ForContext.Provider>
            ))}
        </Template>
    )
}
// <For array={simpleArray}>
//     {(values: typeof arrayType) => <span>{values.test}</span>}
// </For>
