

import React from 'react'
type ArticleImageProps = {
    src: string;
}
const ArticleImage = ({ src }: ArticleImageProps) => {
    return (
        <>
            <section id="" className="cont-figure" data-testid="article-image">
                <a href="" className="figure">
                    <picture id="" className="content-pic picture">
                        <img src={src} alt="" className="content-img" />
                    </picture>
                </a>
            </section>

        </>
    )

}

export { ArticleImage }