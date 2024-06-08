import React from 'react'

type SidebarProps = {
    children: React.ReactNode
}
const Sidebar = ({ children }: SidebarProps) => {
    return (
        <div className="sidebar__main" data-testid="sidebar">
            {children}
        </div>
    )
}

export { Sidebar }