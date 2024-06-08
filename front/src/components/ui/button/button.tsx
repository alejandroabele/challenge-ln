import React from 'react'

type ButtonProps = {
    title?: string
}
const Button = ({ title }: ButtonProps) => {
    return (
        <button data-testid="button" className="--btn --secondary">{title}</button>)
}

export { Button }