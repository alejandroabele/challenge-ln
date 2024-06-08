import React from 'react'
import { Row } from '@/components/ui/row/row'

type ArticlesListFooterProps = {
    children?: React.ReactNode
}
const ArticlesListFooter = ({ children }: ArticlesListFooterProps) => {
    return (
        <Row>
            <div className="col-12 hlp-text-center hlp-margintop-40" data-testid="articles-list-footer">
                {children}
            </div>
        </Row>
    )
}

export { ArticlesListFooter }