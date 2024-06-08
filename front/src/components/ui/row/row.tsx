import React from 'react'

type RowProps = {
    children?: React.ReactNode
}
const Row = ({ children }: RowProps) => {
    return (
        <div className="row" data-testid="row">
            {children}
        </div>)
}

export { Row }