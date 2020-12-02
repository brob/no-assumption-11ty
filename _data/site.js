const client = require('../utils/sanityClient')
const allData = require('./allData')



module.exports = async function() {
    const data = (await allData()).siteSettings

    return data
}