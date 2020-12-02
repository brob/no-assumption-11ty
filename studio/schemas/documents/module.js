export default {
    name: 'module',
    title: 'Module',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // // will be ignored if slugify is set
                slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200),
                isUnique: proposedSlug => true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            title: 'Articles',
            name: 'articles',
            type: 'array',
            of: [
                {
                    title: 'Module',
                    name: 'module',
                    type: 'reference',
                    weak: false,
                    to: [
                        {type: 'article'},
                    ],
                },
            ],
        },
        // body
    ]
}