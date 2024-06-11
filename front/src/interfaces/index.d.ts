interface ITag {
    slug: string;
    text: string;
    count: number;
}
interface IArticle {
    date: string;
    headlines: string;
    image: string;
}

export {
    ITag, IArticle
}