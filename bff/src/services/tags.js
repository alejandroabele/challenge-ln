const TagsRepository = require('../repositories/tags')

const getData = async () => {
    const tags = new TagsRepository()
    const data = await tags.findAll()
    return data
}


module.exports = { getData }
