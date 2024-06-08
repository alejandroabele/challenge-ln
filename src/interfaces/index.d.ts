interface ITag {
    slug: string;
    text: string;
    count: number;
}
interface IArticle {
    date: string;
    headlines: string;
}

export {
    ITag, IArticle
}