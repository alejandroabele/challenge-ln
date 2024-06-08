import { ITag } from "@/interfaces"
const getURL = (tag: ITag) => {

    return `tema/${tag.slug}`
}

export { getURL }