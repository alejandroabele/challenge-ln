import React from 'react'

type ArticleDateProps = {
    date: string;
}
const ArticleDate = ({ date }: ArticleDateProps) => {
    return (
        <h4 className="com-date" data-testid="article-date">{date}</h4>
    )
}

export { ArticleDate }