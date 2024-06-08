const { instanceExternalApi } = require('../utils/fetch')
const { prepareTags } = require('../helpers/prepare-tags')
class TagsRepository {
    async findAll() {
        const tags = await _getExternalTags()
        return tags
    }
}

module.exports = TagsRepository

const _getExternalTags = async () => {
    try {
        const data = await instanceExternalApi.get("")
        return prepareTags(data.articles)
    } catch (error) {
        throw error
    }
}


