import { Tag } from '@/components/ui/tag/tag'
import React from 'react'
import { TagsListContent } from '@/components/ui/tags-list-content/tags-list-content'
import { ITag } from '@/interfaces'

type TagsListProps = {
    data?: ITag[]
}
const TagsList = ({ data }: TagsListProps) => {


    return (
        <TagsListContent>
            {data && data?.map((tag => {
                return (<Tag key={tag.slug} tag={tag} />)
            }))}
        </TagsListContent>
    )
}

export { TagsList }