import React from 'react'
import { Row } from '@/components/ui/row/row'
type TagsListContentProps = {
    children?: React.ReactNode
}
const TagsListContent = ({ children }: TagsListContentProps) => {
    return (
        <Row>
            <div className="cont_tags com-secondary-tag hlp-marginBottom-20" data-testid="tags-list-content">
                {children}
            </div>
        </Row>
    )
}

export { TagsListContent }