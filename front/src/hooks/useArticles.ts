import { fetchArticles as fetchArticlesService } from '@/services/articles'
const fetchArticles = async () => {
    try {
        const response = await fetchArticlesService();
        return response?.payload
    } catch (error) {
        throw error;
    }
};

export {
    fetchArticles
}