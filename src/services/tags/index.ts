import { fetchBff } from '@/utils/fetch'

async function fetchTags() {
    try {
        const res = await fetchBff("/tags")
        return res
    } catch (error) {
        throw error
    }
}

export {
    fetchTags
}