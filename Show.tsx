import React, { useMemo } from 'react'
import { Template } from './Template'
interface ShowProps {
    condition: boolean
}
export const Show: React.FC<ShowProps> = ({ condition, children }) => {
    const shouldShow = useMemo(() => {
        if (condition) {
            return 'none'
        }
        return ''
    }, [condition])
    return (
        <Template>
            <div style={{ display: shouldShow }}>{children}</div>
        </Template>
    )
}
