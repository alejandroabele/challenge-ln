import React from 'react'
import { ITag } from '@/interfaces'
import Link from 'next/link'
import { getURL } from '@/helpers/tag'

type TagProps = {
    tag: ITag
}
const Tag = ({ tag }: TagProps) => {
    const url = getURL(tag)
    return (
        <Link data-testid="tag" href={url}>
            {tag.text}
        </Link>
    )
}

export { Tag }