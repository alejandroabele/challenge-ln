import { ArticlesList } from '@/components/ui/articles-list/articles-list'
import React from 'react'
import { fetchArticles } from '@/hooks/useArticles'
type ArticlesProps = {
}
const Articles = async ({ }: ArticlesProps) => {
    const articles = await fetchArticles()

    return (
        <ArticlesList data={articles} />
    )
}

export { Articles }