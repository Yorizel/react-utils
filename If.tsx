import React from 'react'
import { Template } from './Template'
interface IfProps {
    condition: boolean
}
export const If: React.FC<IfProps> = ({ condition, children }) => {
    return <Template>{condition && children}</Template>
}
