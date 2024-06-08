import React from 'react'

type BannerTitleProps = {
    title?: string
}
const BannerTitle = ({ title }: BannerTitleProps) => {
    return (
        <h2 data-testid="banner-title" className="com-title-section-m">{title}</h2>)
}

export { BannerTitle }