const prepareTags = (articles) => {

    const tagCounts = _countTags(articles)
    const sortedTags = _sortTags(tagCounts)
    return _formatTagData(sortedTags);
}

const _countTags = (articles) => {
    return articles.reduce((countedTag, article) => {

        article.taxonomy.tags.forEach(tag => {
            const { slug, text } = tag;
            countedTag[slug] = {
                count: (countedTag[slug] ? countedTag[slug].count : 0) + 1,
                text: text
            };
        });
        return countedTag;
    }, {});
}

const _sortTags = (tagCounts) => {
    return Object.entries(tagCounts).slice(0, 10).sort((a, b) => b[1].count - a[1].count)
}

const _formatTagData = (sortedTags) => {
    return sortedTags.map(([slug, data]) => ({
        slug,
        text: data.text,
        count: data.count
    }));
}

module.exports = {
    prepareTags
}