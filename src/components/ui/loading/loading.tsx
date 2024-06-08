import React from 'react'

type LoadingProps = {
    title?: string
}
const Loading = ({ title }: LoadingProps) => {
    return (
        <p data-testid="loading" >{title}</p>)
}

export { Loading }