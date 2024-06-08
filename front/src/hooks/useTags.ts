import { fetchTags as fetchTagsService } from '@/services/tags'
const fetchTags = async () => {
    try {
        const response = await fetchTagsService();
        return response.payload;
    } catch (error) {
        throw error
    }

};

export {
    fetchTags
}