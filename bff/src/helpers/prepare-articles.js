const { formatDate } = require('../utils/format-date')
const _filterArticles = (articles) => {
    return articles.filter((article) => article.subtype === "7")
}
const prepareArticles = (articles) => {
    const filteredArticles = _filterArticles(articles)
    return _normalizeArticles(filteredArticles)
}

const _normalizeArticles = (filteredArticles) => {

    return filteredArticles.map((article) => {
        return {
            date: formatDate(article.display_date),
            headlines: article.headlines.basic,
            image: article.promo_items.basic.url
        }
    })
}

module.exports = {
    prepareArticles
}