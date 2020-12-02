const client = require('../utils/sanityClient')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('../utils/serializers')
const allData = require('./allData')

const prepArticle = function (article) {
    return {
        ...article,
        bodyMd: BlocksToMarkdown(article.bodyText, { serializers, ...client.config()})
    }
}

module.exports = async function() {
    const articles = (await allData()).articles;
    const preppedArticles = articles.map(prepArticle)

    return preppedArticles

}