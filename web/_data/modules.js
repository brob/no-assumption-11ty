const allData = require('./allData')

module.exports = async function() {
    const data = (await allData()).modules
    return data.modules
}