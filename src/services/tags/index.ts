import { fetchBff } from '@/utils/fetch'

async function fetchTags() {
    try {
        return await fetchBff("/tags")
    } catch (error) {
        throw error
    }
}

export {
    fetchTags
}