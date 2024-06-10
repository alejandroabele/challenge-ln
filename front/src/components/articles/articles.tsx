import { ArticlesList } from '@/components/ui/articles-list/articles-list'
import React from 'react'
import { useArticles } from '@/hooks/useArticles'
type ArticlesProps = {
}
const Articles = async ({ }: ArticlesProps) => {
    const { data } = await useArticles()
    return (
        <ArticlesList data={data} />
    )
}

export { Articles }