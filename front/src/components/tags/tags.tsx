import { TagsList } from '@/components/ui/tags-list/tags-list'
import React from 'react'
import { fetchTags } from '@/hooks/useTags'

type TagsProps = {
}
const Tags = async ({ }: TagsProps) => {
    const tags = await fetchTags()

    return (
        <TagsList data={tags} />
    )
}

export { Tags }