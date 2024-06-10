import { fetchArticles } from '@/services/articles'
export const useArticles = async () => {
    const response = await fetchArticles();
    return { data: response?.payload || [] }
};
