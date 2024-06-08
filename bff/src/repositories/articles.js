const { instanceExternalApi } = require('../utils/fetch')
const { prepareArticles } = require('../helpers/prepare-articles')
class ArticlesRepository {
    async findAll() {
        const tags = await _getExternalTags()
        return tags
    }

}

module.exports = ArticlesRepository

const _getExternalTags = async () => {
    try {
        const data = await instanceExternalApi.get("")
        return prepareArticles(data.articles)
    } catch (error) {
        throw error
    }
}

