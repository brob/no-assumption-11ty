const Cache = require("@11ty/eleventy-cache-assets")
const client = require('../utils/sanityClient')
const url = "https://j7mnk4n5.api.sanity.io/v1/data/query/production"
const query = `{
"articles": *[_type == "article"]{
    title,
    "slug": slug.current,
    goals,
	bodyText
},
"modules": *[_id == "siteSettings"]{
    "modules": moduleOrder[]->{
        title,
        "slug": slug.current,
        articles[]->{
            title,
            "slug": slug.current,
            "isStub": stub
        }
    }
}[0],
"siteSettings": *[_id == "siteSettings"]{title}
}
`

module.exports = async function() {

    const response = await Cache(`${url}?query=${query}`, {
        duration: "1m", 
        type: "json" 
    })
    const data = response.result
    return {modules: data.modules, articles: data.articles, siteSettings: data.siteSettings}
}





