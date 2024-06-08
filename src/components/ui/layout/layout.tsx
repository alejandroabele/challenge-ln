import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="lay-sidebar" data-testid="layout">
            {children}
        </div>
    )
}

export { Layout }