import React from 'react'

type ArticleContentProps = {
    children?: React.ReactNode
}
const ArticleContent = ({ children }: ArticleContentProps) => {
    return (
        <article className="mod-caja-nota lugares w-100-mobile" data-testid="article-content">
            {children}
        </article >
    )
}

export { ArticleContent }