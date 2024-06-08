import { Article } from '@/components/ui/article/article'
import { Button } from '@/components/ui/button/button'
import React from 'react'
import { IArticle } from '@/interfaces'
import { ArticlesListContent } from '@/components/ui/articles-list-content/articles-list-content'
import { ArticlesListFooter } from '@/components/ui/articles-list-footer/articles-list-footer'
type ArticlesListProps = {
    data?: IArticle[]
}
const ArticlesList = ({ data }: ArticlesListProps) => {
    return (
        <>
            <ArticlesListContent>
                {data && data?.map(((article, index) => {
                    return (<Article key={article.date + index} article={article} />)
                }))}
            </ArticlesListContent>
            <ArticlesListFooter>
                <Button title="MÁS NOTAS DE ACUMULADO GRILLA" />
            </ArticlesListFooter >
        </>
    )
}

export { ArticlesList }