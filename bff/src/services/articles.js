const ArticlesRepository = require('../repositories/articles')

const getData = async () => {
    const articles = new ArticlesRepository()
    const data = await articles.findAll()
    return data
}


module.exports = { getData }
