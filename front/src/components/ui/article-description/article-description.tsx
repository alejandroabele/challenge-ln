import React from 'react'

type ArticleDescriptionProps = {
    children?: React.ReactNode;
}
const ArticleDescription = ({ children }: ArticleDescriptionProps) => {
    return (
        <div className="mod-caja-nota__descrip" data-testid="article-description">

            <div className="mod-caja-nota__descrip">
                {children}

            </div>
        </div>)
}

export { ArticleDescription }