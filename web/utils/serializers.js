const imageUrl = require('./imageUrl')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('../utils/serializers')
const sanityClient = require('./sanityClient')

module.exports = {
  types: {
    code: ({node}) => {
        const codeblock = `
\`\`\`${node.language}\n${node.code}\n \`\`\`
        `
        return codeblock
    },
    bodyImage: ({node}) => {
        console.log(imageUrl(node).width(600).url())
        return `![${node.alt}](${imageUrl(node).width(600).url()})`
    },
    protip: ({node}) => `<hr><aside class="protip"><h3>${node.title}</h3> ${BlocksToMarkdown(node.text, {serializers, ...sanityClient.config})}</aside><hr>`
  }
}
