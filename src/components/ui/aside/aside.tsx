import React from 'react'

type AsideProps = {
    children: React.ReactNode
}
const Aside = ({ children }: AsideProps) => {
    return (

        <div className="sidebar__aside" data-testid="aside">
            {children}

        </div>

    )

}

export { Aside }