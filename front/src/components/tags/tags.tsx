import { TagsList } from '@/components/ui/tags-list/tags-list'
import React from 'react'
import { useTags } from '@/hooks/useTags'

type TagsProps = {
}
const Tags = async ({ }: TagsProps) => {
    const { data } = await useTags()
    return (
        <TagsList data={data} />
    )
}

export { Tags }