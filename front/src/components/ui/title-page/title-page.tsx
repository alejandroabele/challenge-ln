import React from 'react'

type TitlePageProps = {
    title: string;
}
const TitlePage = ({ title }: TitlePageProps) => {
    return (
        <div className="com-titleWithfollow hlp-marginBottom-15" data-testid="title-page">
            <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
        </div>)
}

export { TitlePage }