import React from 'react'
import { BannerTitle } from '@/components/ui/banner-title/banner-title'
type BannerProps = {
}
const Banner = ({ }: BannerProps) => {
    return (
        <>
            <div className="banner --desktop --large" data-testid="banner"></div>
            <div className="com-ranking hlp-none hlp-tablet-none">
                <BannerTitle title="Recetas más leídas" />
            </div>
            <div className="banner --desktop --large"></div>
        </>
    )

}

export { Banner }