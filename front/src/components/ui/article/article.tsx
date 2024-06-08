import React from 'react'
import { IArticle } from '@/interfaces'
import { ArticleDescription } from '@/components/ui/article-description/article-description'
import { ArticleImage } from '@/components/ui/article-image/article-image'
import { ArticleContent } from '@/components/ui/article-content/article-content'
import { ArticleDate } from '@/components/ui/article-date/article-date'
import { ArticleText } from '@/components/ui/article-text/article-text';
import { getDefaultImageSRC } from '@/helpers/image-src'

type ArticleProps = {
    article: IArticle
}
const Article = ({ article }: ArticleProps) => {
    const src = getDefaultImageSRC()
    return (
        <ArticleContent>
            <ArticleImage src={src} />
            <ArticleDescription >
                <ArticleText text={article.headlines} />
                <ArticleDate date={article.date} />
            </ArticleDescription >
        </ArticleContent >
    )
}

export { Article }