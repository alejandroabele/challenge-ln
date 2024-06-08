import React from 'react'

type ArticleTextProps = {
    text: string;
}
const ArticleText = ({ text }: ArticleTextProps) => {
    return (
        <h2 className="com-title-acu" data-testid="article-text"><a href="">{text}</a></h2>
    )
}

export { ArticleText }