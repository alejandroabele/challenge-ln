import { fetchTags } from '@/services/tags'
export const useTags = async () => {
    const response = await fetchTags();
    return { data: response?.payload || [] }
};
