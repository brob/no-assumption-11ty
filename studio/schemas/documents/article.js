import bodyText from "../objects/bodyText";

export default {
    name: 'article',
    title: 'Article',
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
            title: 'Is Stub?',
            name: 'stub',
            type: 'boolean',
        },
        bodyText,
        {
            title: 'Learning Goals',
            name: 'goals',
            type: 'array',
            of: [
                {type: 'string'},
            ],
        },
        {
            title: 'Resources',
            name: 'resources',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Text',
                            type: 'string'
                        },
                        {
                            name: 'url',
                            title: 'url',
                            type: 'string'
                        }
                    ]
                },
            ],
        },      
    ]
}