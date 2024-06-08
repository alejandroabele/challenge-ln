import { fetchBff } from '@/utils/fetch'
async function fetchArticles() {
    try {
        return await fetchBff(`/articles`)
    } catch (error) {
        throw error
    }

}

export {
    fetchArticles
}