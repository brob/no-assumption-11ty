const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'j7mnk4n5',
    dataset: 'production',
    useCdn: true // `false` if you want to ensure fresh data
})
module.exports = client;
