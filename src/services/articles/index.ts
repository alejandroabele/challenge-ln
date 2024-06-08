import { fetchBff } from '@/utils/fetch'
async function fetchArticles() {
    try {
        const res = await fetchBff(`/articles`)
        return res
    } catch (error) {
        throw error
    }

}

export {
    fetchArticles
}