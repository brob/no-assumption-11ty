export default {
    name: 'siteSettings',
    title: 'Site Details',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            title: 'Module Order',
            name: 'moduleOrder',
            type: 'array',
            of: [
                {
                    title: 'Modules',
                    name: 'name',
                    type: 'reference',
                    weak: false,
                    to: [
                        {type: 'module'},
                    ],
                },
                
            ],
        },
        
    ]
}