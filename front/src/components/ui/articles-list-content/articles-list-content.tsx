import React from 'react'

type ArticlesListContentProps = {
    children?: React.ReactNode
}
const ArticlesListContent = ({ children }: ArticlesListContentProps) => {
    return (
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade" data-testid="articles-list-content">
            {children}
        </section >
    )
}

export { ArticlesListContent }